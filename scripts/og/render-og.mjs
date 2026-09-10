// Renders 1200x630 Open Graph cards from template.html with Playwright.
// Usage: node render-og.mjs            -> writes out/*.png
// Cards are defined below; add one entry per page that needs its own card.
import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(resolve(here, 'template.html'), 'utf8');
const lockupSvg = readFileSync(resolve(here, 'gorokko-03b-lockup-color.svg'), 'utf8')
  .replace('<svg ', '<svg class="lockup" ')
  .replace(/<title[^>]*>.*?<\/title>\s*<desc[^>]*>.*?<\/desc>/s, '')
  .replace(/fill="#[0-9a-fA-F]{6}"/g, ''); // colors come from CSS

const cards = [
  {
    file: 'og-default.png',
    theme: 'dark',
    eyebrow: 'An extra set of eyes for home-service teams',
    headline: 'See what needs attention.<br /><span class="accent">Make the call.</span>',
    tag: 'Ask a question. See the details. You approve the next step.',
  },
  {
    file: 'og-home-inspectors.png',
    theme: 'dark',
    eyebrow: 'For home inspectors',
    headline: 'Spend the day <span class="accent">inspecting,</span><br />not chasing.',
    tag: 'Booking, reminders, agreement, payment, report delivery, renewals.',
  },
  {
    file: 'og-who-its-for.png',
    theme: 'dark',
    eyebrow: 'Who it’s for',
    headline: 'Same Rokko, set up around <span class="accent">your kind of job.</span>',
    tag: 'Contractors, home-service teams, home inspectors.',
  },
];

mkdirSync(resolve(here, 'out'), { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const c of cards) {
  const html = template
    .replace('{{THEME}}', c.theme)
    .replace('{{LOCKUP}}', lockupSvg)
    .replace('{{EYEBROW}}', c.eyebrow)
    .replace('{{HEADLINE}}', c.headline)
    .replace('{{TAG}}', c.tag);
  await page.goto(pathToFileURL(resolve(here, 'template.html')).href); // establishes base URL for fonts/
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: resolve(here, 'out', c.file), type: 'png' });
  console.log('wrote', c.file);
}
await browser.close();

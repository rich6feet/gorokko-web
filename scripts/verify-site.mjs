import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve('dist');
const failures = [];
const requiredOutputs = [
  'index.html',
  'product/index.html',
  'use-cases/index.html',
  'use-cases/owner-operations/index.html',
  'use-cases/ai-receptionist/index.html',
  'use-cases/speed-to-lead/index.html',
  'use-cases/no-show-rescheduling/index.html',
  'use-cases/sales-to-operations/index.html',
  'pricing/index.html',
  'resources/index.html',
  'about/index.html',
  'demo/index.html',
  'book/index.html',
  'security/index.html',
  'status/index.html',
  'privacy/index.html',
  'terms/index.html',
  'sms-terms/index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
];

const gatedOutputs = new Set([
  'pricing/index.html',
  'security/index.html',
  'privacy/index.html',
  'terms/index.html',
  'sms-terms/index.html',
  '404.html',
]);

const htmlFiles = [];
const walk = (directory) => {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) htmlFiles.push(path);
  }
};

for (const output of requiredOutputs) {
  if (!existsSync(join(root, output))) failures.push(`Missing output: ${output}`);
}

walk(root);

const resolvePublicPath = (urlPath) => {
  const path = urlPath.split(/[?#]/)[0].replace(/^\//, '');
  if (!path) return join(root, 'index.html');
  const direct = join(root, path);
  if (existsSync(direct) && statSync(direct).isFile()) return direct;
  if (existsSync(join(direct, 'index.html'))) return join(direct, 'index.html');
  if (existsSync(`${direct}.html`)) return `${direct}.html`;
  return null;
};

for (const file of htmlFiles) {
  const rel = relative(root, file).replaceAll('\\', '/');
  const html = readFileSync(file, 'utf8');

  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${rel}: missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) failures.push(`${rel}: missing description`);
  if (!/<link rel="canonical" href="https:\/\/gorokko\.com\//.test(html)) failures.push(`${rel}: missing canonical`);
  if (/href="#"|src=""|TODO|Lorem ipsum|example\.com/i.test(html)) failures.push(`${rel}: contains placeholder or empty destination`);

  const shouldBeGated = gatedOutputs.has(rel);
  const isNoindex = /<meta name="robots" content="noindex, nofollow">/.test(html);
  if (shouldBeGated !== isNoindex) failures.push(`${rel}: unexpected robots gate state`);

  const urls = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((match) => match[1]);
  for (const url of urls) {
    if (url.startsWith('//') || url.startsWith('/#')) continue;
    if (!resolvePublicPath(url)) failures.push(`${rel}: unresolved local URL ${url}`);
  }
}

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const gated of ['/pricing/', '/security/', '/privacy/', '/terms/', '/sms-terms/']) {
  if (sitemap.includes(`<loc>https://gorokko.com${gated}</loc>`)) failures.push(`Sitemap exposes gated route: ${gated}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files, ${requiredOutputs.length} required outputs, internal URLs, metadata, and content gates.`);

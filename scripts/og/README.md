# Open Graph cards

`public/assets/og-*.png` are rendered from `template.html` by `render-og.mjs` (Playwright, 1200×630).
Fonts are vendored in `fonts/` (Instrument Serif via @fontsource, Geist via the `geist` npm package) so the
render is deterministic and needs no network.

Add a card: append an entry to `cards` in `render-og.mjs`, then:

```sh
npx --yes playwright@1 install chromium   # once
node scripts/og/render-og.mjs             # writes scripts/og/out/*.png
cp scripts/og/out/*.png public/assets/
```

Use it on a page with `<BaseLayout image="/assets/og-<name>.png" …>`. Pages without an `image` prop get `og-default.png`.
Set `CHROMIUM_PATH` to reuse an existing Chromium instead of downloading one.

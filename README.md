# Rokko website

The public marketing site for [gorokko.com](https://gorokko.com), built from the approved `03B / Quiet Wordspace` identity and the private canonical website handoff maintained in the local project workspace.

## Local development

```sh
npm install
npm run dev
```

Production checks:

```sh
npm run check
npm run build
```

## Publishing

GitHub is the source repository. Production hosting is the Cloudflare Worker named `gorokko-web`, using Workers Static Assets with `dist/` as the asset directory. The Cloudflare Git integration builds and deploys changes from `main`.

Cloudflare build contract:

- build command: `npm run build`
- deploy command: `npx wrangler deploy`
- static asset directory: `dist`
- production domains: `gorokko.com` and `www.gorokko.com`

The checked-in `wrangler.jsonc` is the runtime configuration source. It serves the Astro output directly, preserves trailing-slash routing, and returns the custom `404.html` for missing routes.

For a manual validation without publishing:

```sh
npm run cloudflare:dry-run
```

For an explicitly requested manual deployment:

```sh
npm run deploy
```

## Deploying to Cloudflare Pages

This Astro project also builds to a plain static folder that can be deployed through Cloudflare Pages without a Node server at runtime.

Use these settings in the Cloudflare dashboard:

- Framework preset: `Astro`
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

For a direct Pages upload, replace the placeholder with the existing Pages project name:

```sh
npx wrangler pages deploy dist --project-name <pages-project-name>
```

The current `gorokko.com` production setup remains the existing `gorokko-web` Worker with Static Assets. The Pages settings above document compatibility; they do not create or switch to a second Cloudflare project.

## Content approval gates

The following inputs remain fail-closed until the owner supplies approved values:

- demo booking URL or form endpoint and fallback contact;
- public pricing and commercial terms;
- named customer proof, screenshots, testimonials, and metrics;
- production security architecture, compliance, and security contact;
- public status destination;
- legal entity, privacy policy, terms, and SMS program language;
- analytics and campaign IDs.

The related routes exist for review but carry `noindex` metadata and do not invent missing content.

## Brand source

Production pages use approved assets copied into `public/brand`. Private strategy, source handoff, and exploration folders are intentionally excluded from the public repository.

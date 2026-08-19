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

The `Deploy Rokko to GitHub Pages` workflow builds the Astro site and publishes `dist/` whenever `main` changes. The repository's GitHub Pages settings must use **GitHub Actions** as the source.

The custom domain is configured in the GitHub Pages repository settings/API. A `CNAME` file is intentionally not used because custom-workflow deployments ignore it.

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

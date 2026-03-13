[![Netlify Status](https://api.netlify.com/api/v1/badges/1fd45c8e-7b0e-4be4-8e74-2acb0ea96ce9/deploy-status)](https://app.netlify.com/sites/fluffy-mermaid-69e231/deploys)

# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Shipp MVP integration (sports betting tracker first)

Primary scope now lives on `/martingale-tracker` (pending bet signal panel).
Secondary/future scope: capital-game reuse once signal relevance scoring matures.

See `docs/shipp-integration.md` for:
- required env vars (`SHIPP_API_KEY`, `SHIPP_CONNECTION_ID` / `SHIPP_CONNECTION_IDS`)
- manual fetch endpoint (`POST /api/shipp/fetch`)
- normalized signal state location (`src/data/shipp-state.json`)
- bet-to-signal matching assumptions used by the tracker panel

## Netlify env sync

Use this workflow to push local runtime env vars (including Shipp vars) to the linked Netlify site.

1. Install the Netlify CLI (one time):
   - `npm install -g netlify-cli`
2. Link this repo to your Netlify site (one time):
   - `netlify link`
3. Create a local env file (default: `.env.netlify`) using this template:

```bash
# Example only — do not commit real values
PUBLIC_SITE_URL=https://example.com
SHIPP_API_KEY=replace_me
SHIPP_CONNECTION_ID=replace_me
# Optional multi-connection format:
# SHIPP_CONNECTION_IDS=id_1,id_2
```

4. Sync to Netlify:
   - `npm run netlify:env:sync`
   - Optional custom file: `NETLIFY_ENV_FILE=.env.staging npm run netlify:env:sync`

After syncing, verify env var names with:
- `netlify env:list`

Then redeploy so runtime env changes take effect:
- `netlify deploy --prod`

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

# Local writing editor

Run `yarn dev` on the loopback development server and use **Edit** on an existing post, blip, or review. The editor route and write API are injected only for `astro dev`; production builds do not contain them.

Phase 1 edits the Markdown body plus these frontmatter fields:

- posts: `title`, `tags`, `summary`
- blips: `title`, `tags`, and `summary` when present
- reviews: `title`, `tags`, `description`

All other frontmatter remains read-only and is preserved from the original source. Fenced code, tables, images, raw HTML, and unusual syntax appear in the preview but their source regions are read-only.

Changes autosave after 700 ms. Cmd/Ctrl+S saves immediately. The status bar reports Saved, Saving, Unsaved, conflict, or error. Browser recovery data is kept in local storage until a save succeeds. If the file changes on disk, saving stops; copy the browser version before loading the disk version.

The editor accepts only indexed `posts`, `blips`, and `reviews` identities. Writes require the exact loopback origin, an in-memory capability token, JSON content, a matching source revision, canonical non-symlink paths, and atomic same-directory replacement.

Verification:

```sh
yarn test:editor
yarn test:editor:browser # with `yarn dev` running
EDITOR_SMOKE_BASE_URL=http://127.0.0.1:4321 yarn test:editor:browser # optional override
yarn astro check
yarn build
```

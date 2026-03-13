/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SHIPP_API_KEY?: string;
  readonly SHIPP_CONNECTION_ID?: string;
  readonly SHIPP_CONNECTION_IDS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
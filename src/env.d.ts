/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL_US: string;
  readonly PUBLIC_SUPABASE_ANON_KEY_US: string;
  readonly PUBLIC_SUPABASE_URL_EU: string;
  readonly PUBLIC_SUPABASE_ANON_KEY_EU: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

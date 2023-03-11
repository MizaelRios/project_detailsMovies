/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_KEY: string;
    readonly BASE_URL_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

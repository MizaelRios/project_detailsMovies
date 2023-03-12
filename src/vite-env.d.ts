/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly VITE_BASE_URL_API: string;
    readonly VITE_URL_IMAGE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

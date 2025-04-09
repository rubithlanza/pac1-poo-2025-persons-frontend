///<reference types= "vite/client"/>

interface importMetaEnv{
    readonly VITE_API_URL : string;
    readonly VITE_IMAGE_STORE_USER : string;
    readonly VITE_IMAGE_STORE_PASS : string;
} 
interface ImportMeta{
    readonly env: importMetaEnv;
}
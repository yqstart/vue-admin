interface ViteEnv{
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_API_URL: string;
}
interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

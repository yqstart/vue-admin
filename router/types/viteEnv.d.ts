interface ViteEnv{
  VITE_ROUTE_AUTOLOAD: boolean;
  VITE_API_URL: string;
}
interface ImportMetaEnv extends ViteEnv {
  // 更多环境变量...
}

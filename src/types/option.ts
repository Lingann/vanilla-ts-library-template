export type Plugin = {
  name: string;
  version: string;
  register: (server: any, options: any) => Promise<void>;
};
export interface HttpOptions {
  method?: string;
  headers?: any;
  body?: any;
  params?: any;
  data?: any;
  timeout?: number;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
}

export type Plugin = {
    name: string;
    version: string;
    register: (server: any, options: any) => Promise<void>;
};
export declare function setup(_options: any): any;
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
export declare function http(url: string, options?: HttpOptions): Promise<any>;

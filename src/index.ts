export type Plugin = {
  name: string;
  version: string;
  register: (server: any, options: any) => Promise<void>;
};

export function setup(_options: any): any {
  // ...
  const NAME = "setup";
  return {
    name: NAME,
    version: "1.0.0",
  };
}

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

/**
 * 封装http请求
 * @param {string} url 请求地址
 * @param {HttpOptions} options 请求参数
 */
export function http(url: string, options: HttpOptions = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(options.method || "GET", url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(options.body);
  });
}

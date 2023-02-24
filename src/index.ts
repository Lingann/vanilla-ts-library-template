import { HttpOptions } from "./types/option";

export function setup(_options: any): any {
  // ...
  const NAME = "setup";
  return {
    name: NAME,
    version: "1.0.0",
  };
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

export const Vanilla = {
  http,
};

export default Vanilla;

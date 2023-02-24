export function setup(_options) {
    const NAME = "setup";
    return {
        name: NAME,
        version: "1.0.0",
    };
}
export function http(url, options = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options.method || "GET", url, true);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(options.body);
    });
}
//# sourceMappingURL=index.js.map
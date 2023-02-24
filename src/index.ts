import { http } from "./utils/http";

export function setup(_options: any): any {
  // ...
  const NAME = "setup";
  return {
    name: NAME,
    version: "1.0.0",
  };
}

export const Vanilla = {
  http,
  setup,
};

Object.assign(window, {
  Vanilla,
});

export default Vanilla;

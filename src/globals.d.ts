import { LoDashStatic } from "lodash";
import Vanilla from "./index";

export {};

declare global {
  export type Vanilla = typeof Vanilla;

  interface Window {
    Vanilla: Vanilla;
  }
}

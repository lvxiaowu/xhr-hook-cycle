import { hook, unHook } from "./xhr-hook";
import { proxy, unProxy } from "./xhr-proxy";
// ah(ajax hook)
export var ah = {
  proxy,
  unProxy,
  hook,
  unHook,
};

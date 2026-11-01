import { len } from "./len.js";
import { indexOf } from "./index-of.js";

export function endsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  let strLen = len(str);
  let searchLen = len(search);

  if (searchLen > strLen) {
    return false;
  }

  if (searchLen === 0) {
    return true;
  }

  return indexOf(str, search) === strLen - searchLen;
}

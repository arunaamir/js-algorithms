import { indexOf } from "./index-of.js";

export function startsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  return indexOf(str, search) === 0;
}

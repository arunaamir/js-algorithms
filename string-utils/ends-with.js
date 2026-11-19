/**
 * Проверяет, заканчивается ли строка str подстрокой search.
 *
 * @param {string} str — исходная строка
 * @param {string} search — проверяемая подстрока
 * @returns {boolean} — true если строка заканчивается на search, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   endsWith('hello world', 'world'); // true
 *   endsWith('hello world', 'hello'); // false
 *   endsWith('hello', '');            // true
 */

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

/**
 * Проверяет, начинается ли строка str с подстроки search.
 *
 * @param {string} str — исходная строка
 * @param {string} search — проверяемая подстрока
 * @returns {boolean} — true если строка начинается с search, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   startsWith('hello world', 'hello'); // true
 *   startsWith('hello world', 'world'); // false
 *   startsWith('hello', '');            // true
 */

import { indexOf } from "./index-of.js";

export function startsWith(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  return indexOf(str, search) === 0;
}

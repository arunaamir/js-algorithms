/**
 * Проверяет, содержит ли строка str подстроку search.
 *
 * @param {string} str — исходная строка
 * @param {string} search — искомая подстрока
 * @returns {boolean} — true если подстрока найдена, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   includes('hello world', 'world'); // true
 *   includes('hello', 'world');       // false
 *   includes('hello', '');            // true
 */

import { indexOf } from "./index-of.js";

export function includes(str, search) {
  return indexOf(str, search) !== -1;
}

/**
 * Находит первое вхождение подстроки search в строке str.
 *
 * @param {string} str — исходная строка
 * @param {string} search — искомая подстрока
 * @returns {number} — индекс первого вхождения или -1, если подстрока не найдена
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   indexOf('hello world', 'world'); // 6
 *   indexOf('hello', 'x');           // -1
 *   indexOf('hello', '');            // 0
 */

import { len } from "./len.js";

export function indexOf(str, search) {
  if (typeof str !== "string" || typeof search !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  if (len(search) === 0) {
    return 0;
  }

  for (let i = 0; i <= len(str) - len(search); i++) {
    let j = 0;

    for (; j < len(search); j++) {
      if (str[i + j] !== search[j]) {
        break;
      }
    }

    if (j === len(search)) {
      return i;
    }
  }

  return -1;
}

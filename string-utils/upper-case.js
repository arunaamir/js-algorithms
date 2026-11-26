import { len } from "./len.js";

/**
 * Переводит строку в верхний регистр.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} Строка в верхнем регистре.
 * @throws {TypeError} Если str не является строкой.
 *
 * @example
 * upperCase("hello"); // "HELLO"
 */

export function upperCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("str должен быть строкой");
  }

  let result = "";

  for (let i = 0; i < len(str); i++) {
    const code = str.charCodeAt(i);

    if ((code >= 97 && code <= 122) || (code >= 1072 && code <= 1103)) {
      result = result + String.fromCodePoint(code - 32);
    } else {
      result = result + str[i];
    }
  }

  return result;
}

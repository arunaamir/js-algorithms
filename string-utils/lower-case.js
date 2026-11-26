import { len } from "./len.js";

/**
 * Переводит строку в нижний регистр.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} Строка в нижнем регистре.
 * @throws {TypeError} Если str не является строкой.
 *
 * @example
 * lowerCase("HELLO"); // "hello"
 */

export function lowerCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("str должен быть строкой");
  }

  let result = "";

  for (let i = 0; i < len(str); i++) {
    const code = str.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 1040 && code <= 1071)) {
      result = result + String.fromCodePoint(code + 32);
    } else {
      result = result + str[i];
    }
  }
  return result;
}

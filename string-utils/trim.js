import { len } from "./len.js";
import { substring } from "./substring.js";

/**
 * Убирает пробелы в начале и конце строки.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} Строка без пробелов в начале и конце.
 * @throws {TypeError} Если str не является строкой.
 *
 * @example
 * trim("  hello  "); // "hello"
 */

export function trim(str) {
  if (typeof str !== "string") {
    throw new TypeError("str должен быть строкой");
  }

  const strLen = len(str);

  let start = 0;
  while (
    start < strLen &&
    (str[start] === " " ||
      str[start] === "\t" ||
      str[start] === "\n" ||
      str[start] === "\r")
  ) {
    start = start + 1;
  }

  let end = strLen - 1;
  while (
    end >= start &&
    (str[end] === " " ||
      str[end] === "\t" ||
      str[end] === "\n" ||
      str[end] === "\r")
  ) {
    end = end - 1;
  }

  return substring(str, start, end + 1);
}

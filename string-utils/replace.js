import { len } from "./len.js";
import { indexOf } from "./index-of.js";
import { substring } from "./substring.js";

/**
 * Заменяет часть строки на другую строку.
 *
 * @param {string} str - Исходная строка.
 * @param {string} search - Часть строки, которую нужно заменить.
 * @param {string} replacement - Строка для замены.
 * @returns {string} Строка с заменой.
 * @throws {TypeError} Если аргументы имеют неправильный тип.
 *
 * @example
 * replace("hello", "l", "x"); // "hexlo"
 */

export function replace(str, search, replacement) {
  if (
    typeof str !== "string" ||
    typeof search !== "string" ||
    typeof replacement !== "string"
  ) {
    throw new TypeError("Все аргументы должны быть строками");
  }

  const position = indexOf(str, search);

  if (position === -1) {
    return str;
  }

  const before = substring(str, 0, position);
  const after = substring(str, position + len(search), len(str));

  return before + replacement + after;
}

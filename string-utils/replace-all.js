import { len } from "./len.js";
import { isEqual } from "./is-equal.js";
import { substring } from "./substring.js";

/**
 * Заменяет все найденные части строки на другую строку.
 *
 * @param {string} str - Исходная строка.
 * @param {string} search - Часть строки, которую нужно заменить.
 * @param {string} replacement - Строка для замены.
 * @returns {string} Строка со всеми заменами.
 * @throws {TypeError} Если аргументы имеют неправильный тип.
 *
 * @example
 * replaceAll("hello", "l", "x"); // "hexxo"
 */

export function replaceAll(str, search, replacement) {
  if (
    typeof str !== "string" ||
    typeof search !== "string" ||
    typeof replacement !== "string"
  ) {
    throw new TypeError("Все аргументы должны быть строками");
  }

  const strLen = len(str);
  const searchLen = len(search);

  let result = "";
  let i = 0;

  if (searchLen === 0) {
    while (i < strLen) {
      result = result + replacement + str[i];
      i = i + 1;
    }
    result = result + replacement;
    return result;
  }

  while (i < strLen) {
    if (isEqual(substring(str, i, i + searchLen), search)) {
      result = result + replacement;
      i = i + searchLen;
    } else {
      result = result + str[i];
      i = i + 1;
    }
  }

  return result;
}

import { len } from "./len.js";

/**
 * Возвращает часть строки от start до end.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начало части строки.
 * @param {number} [end] - Конец части строки.
 * @returns {string} Часть строки.
 * @throws {TypeError} Если аргументы имеют неправильный тип.
 *
 * @example
 * substring('hello', 1, 4); // 'ell'
 * substring('hello', 4, 1); // 'ell'
 * substring('hello', 2);    // 'llo'
 */

export function substring(str, start, end) {
  if (typeof str !== "string") {
    throw new TypeError("str должен быть строкой");
  }

  if (typeof start !== "number") {
    throw new TypeError("start должен быть числом");
  }

  if (end !== undefined && typeof end !== "number") {
    throw new TypeError("end должен быть числом");
  }

  const strLen = len(str);

  if (end === undefined) {
    end = strLen;
  }

  if (isNaN(start) || start < 0) {
    start = 0;
  }

  if (isNaN(end) || end < 0) {
    end = 0;
  }

  if (start > strLen) {
    start = strLen;
  }

  if (end > strLen) {
    end = strLen;
  }

  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  let result = "";

  for (let i = start; i < end; i++) {
    result = result + str[i];
  }

  return result;
}

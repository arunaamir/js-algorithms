import { len } from "./len.js";
import { substring } from "./substring.js";

/**
 * Возвращает часть строки.
 *
 * @param {string} str - Исходная строка.
 * @param {number} start - Начало части строки.
 * @param {number} [end] - Конец части строки.
 * @returns {string} Часть строки.
 * @throws {TypeError} Если str, start или end имеют неправильный тип.
 *
 * @example
 * slice("hello", 1, 4); // "ell"
 */

export function slice(str, start, end) {
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

  if (isNaN(start)) {
    start = 0;
  }
  if (isNaN(end)) {
    end = 0;
  }

  if (start < 0) {
    start = strLen + start;
    if (start < 0) {
      start = 0;
    }
  }
  if (end < 0) {
    end = strLen + end;
    if (end < 0) {
      end = 0;
    }
  }

  if (start >= end) {
    return "";
  }

  return substring(str, start, end);
}

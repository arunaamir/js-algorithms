/**
 * Проверяет, больше ли строка a строки b.
 * Сравнение выполняется лексикографически, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a больше b, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isMore('hello', 'apple'); // true
 *   isMore('apple', 'hello'); // false
 *   isMore('abc', 'abc');     // false
 */

export function isMore(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  let i = 0;
  for (; a[i] !== undefined && b[i] !== undefined; i++) {
    if (a[i] !== b[i]) {
      return a[i] > b[i];
    }
  }

  return a[i] !== undefined;
}

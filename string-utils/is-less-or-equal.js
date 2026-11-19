/**
 * Проверяет, меньше ли строка a строки b или равна ей.
 * Сравнение выполняется лексикографически, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a меньше или равна b, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isLessOrEqual('apple', 'hello'); // true
 *   isLessOrEqual('abc', 'abc');     // true
 *   isLessOrEqual('hello', 'apple'); // false
 */

export function isLessOrEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  let i = 0;
  for (; a[i] !== undefined && b[i] !== undefined; i++) {
    if (a[i] !== b[i]) {
      return a[i] < b[i];
    }
  }

  return a[i] === undefined || b[i] !== undefined;
}

/**
 * Проверяет, больше ли строка a строки b или равна ей.
 * Сравнение выполняется лексикографически, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если a больше или равна b, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isMoreOrEqual('hello', 'apple'); // true
 *   isMoreOrEqual('abc', 'abc');     // true
 *   isMoreOrEqual('apple', 'hello'); // false
 */

export function isMoreOrEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new TypeError("Аргументы должны быть строками");
  }

  let i = 0;
  for (; a[i] !== undefined && b[i] !== undefined; i++) {
    if (a[i] !== b[i]) {
      return a[i] > b[i];
    }
  }

  return a[i] !== undefined || b[i] === undefined;
}

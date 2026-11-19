/**
 * Проверяет, отличаются ли строки a и b.
 * Сравнение посимвольное, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если строки отличаются, false если равны
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isNotEqual('hello', 'world'); // true
 *   isNotEqual('hello', 'hello'); // false
 */

export function isNotEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new TypeError("Аргументы должен быть строками");
  }

  for (let i = 0; a[i] !== undefined || b[i] !== undefined; i++) {
    if (a[i] !== b[i]) {
      return true;
    }
  }
  return false;
}

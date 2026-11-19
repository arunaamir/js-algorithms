/**
 * Проверяет, равны ли строки a и b.
 * Сравнение посимвольное, с учётом регистра.
 *
 * @param {string} a — первая строка
 * @param {string} b — вторая строка
 * @returns {boolean} — true если строки равны, false если нет
 * @throws {TypeError} — если любой из аргументов не строка
 *
 * @example
 *   isEqual('hello', 'hello'); // true
 *   isEqual('hi', 'hello');    // false
 *   isEqual('Hello', 'hello'); // false
 */

export function isEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    throw new TypeError("Аргументы должен быть строками");
  }

  for (let i = 0; a[i] !== undefined || b[i] !== undefined; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

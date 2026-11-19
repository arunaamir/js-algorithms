/**
 * Переворачивает строку str.
 *
 * @param {string} str — исходная строка
 * @returns {string} — строка в обратном порядке
 * @throws {TypeError} — если аргумент не является строкой
 *
 * @example
 *   reverse('hello'); // 'olleh'
 *   reverse('12345'); // '54321'
 *   reverse('');      // ''
 */

export function reverse(str) {
  if (typeof str !== "string") {
    throw new TypeError("Аргумент должен быть строкой");
  }

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

/**
 * Возвращает количество символов в строке.
 * Подсчёт выполняется посимвольно.
 *
 * @param {string} str — строка для подсчёта
 * @returns {number} — количество символов в строке
 * @throws {TypeError} — если аргумент не является строкой
 *
 * @example
 *   len('hello'); // 5
 *   len('');      // 0
 */

export function len(str) {
  if (typeof str !== "string") {
    throw new TypeError("Аргумент должен быть строкой");
  }
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

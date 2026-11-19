/**
 * Повторяет строку str указанное количество раз.
 * Дробное количество повторений округляется вниз.
 * Если count не указан, возвращает пустую строку.
 *
 * @param {string} str — строка для повторения
 * @param {number} [count] — количество повторений
 * @returns {string} — строка, повторённая указанное количество раз
 * @throws {TypeError} — если str не строка или count не число
 * @throws {RangeError} — если count отрицательный
 *
 * @example
 *   repeat('ha', 3); // 'hahaha'
 *   repeat('abc', 2); // 'abcabc'
 *   repeat('hello', 0); // ''
 *   repeat('hello'); // ''
 */

export function repeat(str, count) {
  if (typeof str !== "string") {
    throw new TypeError("Первый аргумент должен быть строкой");
  }

  if (count === undefined) {
    return "";
  }

  if (typeof count !== "number") {
    throw new TypeError("Количество повторений должно быть числом");
  }

  if (count < 0) {
    throw new RangeError("Количество повторений не может быть отрицательным");
  }

  let result = "";
  let i = 0;
  let total = Math.floor(count);

  while (i < total) {
    result += str;
    i++;
  }

  return result;
}

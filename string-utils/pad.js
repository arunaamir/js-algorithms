import { len } from "./len.js";
import { repeat } from "./repeat.js";
import { substring } from "./substring.js";

/**
 * Дополняет строку символами до нужной длины.
 *
 * @param {string} str - Исходная строка.
 * @param {number} length - Длина строки после дополнения.
 * @param {string} char - Символ для дополнения.
 * @param {string} side - Сторона, с которой нужно дополнить строку.
 * @returns {string} Дополненная строка.
 * @throws {TypeError} Если аргументы имеют неправильный тип.
 *
 * @example
 * pad("hello", 7, "*", "start"); // "**hello"
 */

export function pad(str, length, char, side) {
  if (typeof str !== "string") {
    throw new TypeError("str должен быть строкой");
  }
  if (typeof length !== "number") {
    throw new TypeError("length должен быть числом");
  }
  if (typeof char !== "string") {
    throw new TypeError("char должен быть строкой");
  }
  if (side !== "left" && side !== "right" && side !== "both") {
    throw new RangeError("side должен быть 'left', 'right' или 'both'");
  }

  const padding = length - len(str);

  if (padding <= 0 || len(char) === 0) {
    return str;
  }

  let leftCount = 0;
  let rightCount = 0;

  if (side === "left") {
    leftCount = padding;
  } else if (side === "right") {
    rightCount = padding;
  } else {
    leftCount = (padding - (padding % 2)) / 2;
    rightCount = padding - leftCount;
  }

  const fill = substring(repeat(char, padding), 0, padding);

  const left = substring(fill, 0, leftCount);
  const right = substring(fill, 0, rightCount);

  return left + str + right;
}

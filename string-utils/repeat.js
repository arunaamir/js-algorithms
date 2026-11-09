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

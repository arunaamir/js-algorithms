import { expect, test } from "bun:test";
import { trim } from "./trim.js";

test("Должна убрать пробелы в начале и конце: ('  hello  ')", () => {
  expect(trim("  hello  ")).toBe("hello");
});

test("Должна убрать пробелы только в начале: ('  hello')", () => {
  expect(trim("  hello")).toBe("hello");
});

test("Должна убрать пробелы только в конце: ('hello  ')", () => {
  expect(trim("hello  ")).toBe("hello");
});

test("Должна вернуть исходную строку, если пробелов по краям нет: ('hello')", () => {
  expect(trim("hello")).toBe("hello");
});

test("Должна сохранить пробелы внутри строки: ('  hello world  ')", () => {
  expect(trim("  hello world  ")).toBe("hello world");
});

test("Должна вернуть '' для пустой строки: ('')", () => {
  expect(trim("")).toBe("");
});

test("Должна вернуть '' для строки из одних пробелов: ('   ')", () => {
  expect(trim("   ")).toBe("");
});

test("Должна убрать табуляцию и переводы строк по краям: ('\\t\\nhello\\r\\n')", () => {
  expect(trim("\t\nhello\r\n")).toBe("hello");
});

test("Должна работать с кириллицей: ('  привет  ')", () => {
  expect(trim("  привет  ")).toBe("привет");
});

test("Должна выбросить TypeError если аргумент не строка", () => {
  expect(() => trim(123)).toThrow(TypeError);
  expect(() => trim(null)).toThrow(TypeError);
  expect(() => trim(undefined)).toThrow(TypeError);
});

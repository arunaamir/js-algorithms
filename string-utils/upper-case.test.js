import { expect, test } from "bun:test";
import { upperCase } from "./upper-case.js";

test("Должна перевести все строчные латинские: ('hello')", () => {
  expect(upperCase("hello")).toBe("HELLO");
});

test("Должна оставить заглавные без изменений: ('HELLO')", () => {
  expect(upperCase("HELLO")).toBe("HELLO");
});

test("Должна работать со смешанным регистром: ('Hello World')", () => {
  expect(upperCase("Hello World")).toBe("HELLO WORLD");
});

test("Должна не трогать пробелы: (' hello 123')", () => {
  expect(upperCase(" hello 123")).toBe(" HELLO 123");
});

test("Должна не менять цифры: ('hello123')", () => {
  expect(upperCase("hello123")).toBe("HELLO123");
});

test("Должна не менять знаки: ('hello!@#')", () => {
  expect(upperCase("hello!@#")).toBe("HELLO!@#");
});

test("Должна вернуть '' для пустой строки", () => {
  expect(upperCase("")).toBe("");
});

test("Должна вернуть строку без изменений, если нет строчных букв: ('123!@#')", () => {
  expect(upperCase("123!@#")).toBe("123!@#");
});

test("Должна перевести кириллицу: ('привет')", () => {
  expect(upperCase("привет")).toBe("ПРИВЕТ");
});

test("Должна работать со смесью латиницы и кириллицы: ('hello привет')", () => {
  expect(upperCase("hello привет")).toBe("HELLO ПРИВЕТ");
});

test("Должна не менять уже заглавные буквы (включая кириллицу): ('ПРИВЕТ')", () => {
  expect(upperCase("ПРИВЕТ")).toBe("ПРИВЕТ");
});

test("Должна выбросить TypeError если аргумент не строка", () => {
  expect(() => upperCase(123)).toThrow(TypeError);
  expect(() => upperCase(null)).toThrow(TypeError);
});

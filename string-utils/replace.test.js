import { expect, test } from "bun:test";
import { replace } from "./replace.js";

test("Должна заменить 'world' на 'everyone': ('hello world', 'world', 'everyone')", () => {
  expect(replace("hello world", "world", "everyone")).toBe("hello everyone");
});

test("Должна заменить в начале: ('hello world', 'hello', 'hi')", () => {
  expect(replace("hello world", "hello", "hi")).toBe("hi world");
});

test("Должна заменить в конце: ('hello world', 'world', 'earth')", () => {
  expect(replace("hello world", "world", "earth")).toBe("hello earth");
});

test("Должна заменить в середине: ('hello world', 'ello', 'i')", () => {
  expect(replace("hello world", "ello", "i")).toBe("hi world");
});

test("Должна вернуть исходную строку, если search не найден: ('hello', 'help', 'hhhh')", () => {
  expect(replace("hello", "help", "hhhh")).toBe("hello");
});

test("Должна работать с заменой на более длинную: ('hi', 'i', 'ello')", () => {
  expect(replace("hi", "i", "ello")).toBe("hello");
});

test("Должна работать с заменой на более короткую: ('hello', 'ello', 'i')", () => {
  expect(replace("hello", "ello", "i")).toBe("hi");
});

test("Должна работать с заменой на пустую строку: ('hello', 'll', '')", () => {
  expect(replace("hello", "ll", "")).toBe("heo");
});

test("Должна заменить только первое вхождение при множественных: ('banana', 'na', 'ba')", () => {
  expect(replace("banana", "na", "ba")).toBe("babana");
});

test("Должна работать с кириллицей: ('привет мир', 'мир', 'всем')", () => {
  expect(replace("привет мир", "мир", "всем")).toBe("привет всем");
});

test("Должна выбросить TypeError если любой аргумент не строка", () => {
  expect(() => replace(123, "a", "b")).toThrow(TypeError);
  expect(() => replace("abc", 1, "b")).toThrow(TypeError);
  expect(() => replace("abc", "a", null)).toThrow(TypeError);
});

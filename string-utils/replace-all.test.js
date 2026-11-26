import { expect, test } from "bun:test";
import { replaceAll } from "./replace-all.js";

test("Должна заменить одно вхождение: ('hello', 'll', 'LL')", () => {
  expect(replaceAll("hello", "ll", "LL")).toBe("heLLo");
});

test("Должна заменить несколько вхождений: ('banana', 'na', 'NA')", () => {
  expect(replaceAll("banana", "na", "NA")).toBe("baNANA");
});

test("Должна не учитывать подставленную строку: ('aaa', 'aa', 'ba')", () => {
  expect(replaceAll("aaa", "aa", "ba")).toBe("baa");
});

test("Должна вернуть исходную строку, если search не найден: ('hello', 'eli', 'hhh')", () => {
  expect(replaceAll("hello", "eli", "hhh")).toBe("hello");
});

test("Должна работать с заменой символа на строку: ('a', 'a', 'hello')", () => {
  expect(replaceAll("a", "a", "hello")).toBe("hello");
});

test("Должна работать с заменой на более длинную: ('hi', 'i', 'ello')", () => {
  expect(replaceAll("hi", "i", "ello")).toBe("hello");
});

test("Должна работать с заменой на пустую строку: ('hello', 'l', '')", () => {
  expect(replaceAll("hello", "l", "")).toBe("heo");
});

test("Должна вернуть '' для пустой исходной строки: ('', 'abc', 'X')", () => {
  expect(replaceAll("", "abc", "X")).toBe("");
});

test("Должна вставить replacement вокруг каждого символа при пустом search: ('abc', '', 'X')", () => {
  expect(replaceAll("abc", "", "X")).toBe("XaXbXcX");
});

test("Должна выбросить TypeError если любой аргумент не строка", () => {
  expect(() => replaceAll(123, "a", "b")).toThrow(TypeError);
  expect(() => replaceAll("abc", 1, "b")).toThrow(TypeError);
  expect(() => replaceAll("abc", "a", null)).toThrow(TypeError);
});

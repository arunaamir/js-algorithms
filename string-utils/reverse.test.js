import { test, expect } from "bun:test";
import { reverse } from "./reverse.js";

test("Должна перевернуть строку", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("Должна вернуть пустую строку для пустой строки", () => {
  expect(reverse("")).toBe("");
});

test("Должна вернуть строку из одного символа без изменений", () => {
  expect(reverse("a")).toBe("a");
});

test("Должна вернуть ту же строку для палиндрома", () => {
  expect(reverse("racecar")).toBe("racecar");
});

test("Должна перевернуть строку с пробелами", () => {
  expect(reverse("a b c")).toBe("c b a");
});

test("Должна работать с кириллицей", () => {
  expect(reverse("привет")).toBe("тевирп");
});

test("Должна выбросить TypeError если аргумент — число", () => {
  expect(() => reverse(123)).toThrow(TypeError);
});

test("Должна выбросить TypeError если аргумент — null", () => {
  expect(() => reverse(null)).toThrow(TypeError);
});

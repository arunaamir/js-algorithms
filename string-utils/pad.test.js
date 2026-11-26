import { expect, test } from "bun:test";
import { pad } from "./pad.js";

test("Должна дополнить слева: ('hi', 5, '-', 'left')", () => {
  expect(pad("hi", 5, "-", "left")).toBe("---hi");
});

test("Должна дополнить справа: ('hi', 5, '-', 'right')", () => {
  expect(pad("hi", 5, "-", "right")).toBe("hi---");
});

test("Должна дополнить с обеих сторон (чётное): ('hi', 6, '-', 'both')", () => {
  expect(pad("hi", 6, "-", "both")).toBe("--hi--");
});

test("Должна дополнить с обеих сторон (нечётное, лишний справа): ('hi', 5, '-', 'both')", () => {
  expect(pad("hi", 5, "-", "both")).toBe("-hi--");
});

test("Должна вернуть строку без изменений, если длина уже достаточная: ('hello', 5, '-', 'left')", () => {
  expect(pad("hello", 5, "-", "left")).toBe("hello");
});

test("Должна вернуть строку без изменений, если она длиннее целевой: ('hello', 3, '-', 'left')", () => {
  expect(pad("hello", 3, "-", "left")).toBe("hello");
});

test("Должна работать с пробелами: ('a', 3, ' ', 'right')", () => {
  expect(pad("a", 3, " ", "right")).toBe("a  ");
});

test("Должна работать с пустой исходной строкой: ('', 4, 'x', 'both')", () => {
  expect(pad("", 4, "x", "both")).toBe("xxxx");
});

test("Должна вернуть '' для pad('', 0, '-', 'left')", () => {
  expect(pad("", 0, "-", "left")).toBe("");
});

test("Должна дополнить многосимвольной строкой слева: ('hi', 7, 'ab', 'left')", () => {
  expect(pad("hi", 7, "ab", "left")).toBe("ababahi");
});

test("Должна дополнить многосимвольной строкой справа: ('hi', 7, 'ab', 'right')", () => {
  expect(pad("hi", 7, "ab", "right")).toBe("hiababa");
});

test("Должна выбросить ошибку при неверном side: ('a', 3, '-', 'top')", () => {
  expect(() => pad("a", 3, "-", "top")).toThrow();
});

test("Должна выбросить TypeError если str не строка", () => {
  expect(() => pad(123, 5, "-", "left")).toThrow(TypeError);
});

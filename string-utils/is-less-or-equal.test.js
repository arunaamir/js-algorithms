import { describe, expect, test } from 'bun:test';
import { isLessOrEqual } from './is-less-or-equal.js';

describe('isLessOrEqual(a, b)', () => {
    test("Должна вернуть true если a меньше ('car', 'cat')", () => {
        expect(isLessOrEqual('car', 'cat')).toBe(true);
    });

    test("Должна вернуть true если строки равны ('hello', 'hello')", () => {
        expect(isLessOrEqual('hello', 'hello')).toBe(true);
    });

    test("Должна вернуть false если a больше ('cat', 'car')", () => {
        expect(isLessOrEqual('cat', 'car')).toBe(false);
    });

    test("Должна вернуть false если a длиннее и символы совпадают ('hello!', 'hello')", () => {
        expect(isLessOrEqual('hello!', 'hello')).toBe(false);
    });

    test("Должна вернуть true если a короче и символы совпадают ('hello', 'hello!')", () => {
        expect(isLessOrEqual('hello', 'hello!')).toBe(true);
    });

    test("Должна вернуть true для пустых строк ('', '')", () => {
        expect(isLessOrEqual('', '')).toBe(true);
    });

    test('Должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isLessOrEqual(123, 'hello')).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isLessOrEqual('hello', null)).toThrow(TypeError);
    });
});
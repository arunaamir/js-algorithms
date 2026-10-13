import { describe, expect, test } from 'bun:test';
import { isMoreOrEqual } from './is-more-or-equal.js';

describe('isMoreOrEqual(a, b)', () => {
    test("Должна вернуть true если a больше ('cat', 'car')", () => {
        expect(isMoreOrEqual('cat', 'car')).toBe(true);
    });

    test("Должна вернуть true если строки равны ('hello', 'hello')", () => {
        expect(isMoreOrEqual('hello', 'hello')).toBe(true);
    });

    test("Должна вернуть false если a меньше ('car', 'cat')", () => {
        expect(isMoreOrEqual('car', 'cat')).toBe(false);
    });

    test("Должна вернуть true если a длиннее и символы совпадают ('hello!', 'hello')", () => {
        expect(isMoreOrEqual('hello!', 'hello')).toBe(true);
    });

    test("Должна вернуть false если a короче и символы совпадают ('hello', 'hello!')", () => {
        expect(isMoreOrEqual('hello', 'hello!')).toBe(false);
    });

    test("Должна вернуть true для пустых строк ('', '')", () => {
        expect(isMoreOrEqual('', '')).toBe(true);
    });

    test('Должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isMoreOrEqual(123, 'hello')).toThrow(TypeError);
    });

    test('Должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isMoreOrEqual('hello', null)).toThrow(TypeError);
    });
});
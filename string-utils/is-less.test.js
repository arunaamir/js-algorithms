import { describe, test, expect } from 'bun:test';
import { isLess } from './is-less.js';

describe('Тесты isLess', () => {
    test('должна вернуть true если первая строка меньше', () => {
        expect(isLess('car', 'cat')).toBe(true);
    });

    test('должна вернуть false если первая строка больше', () => {
        expect(isLess('cat', 'car')).toBe(false);
    });

    test('должна вернуть false для одинаковых строк', () => {
        expect(isLess('hello', 'hello')).toBe(false);
    });

    test('должна вернуть true если первая строка короче при одинаковом начале', () => {
        expect(isLess('hello', 'hello!')).toBe(true);
    });

    test('должна учитывать регистр', () => {
        expect(isLess('A', 'a')).toBe(true);
    });

    test('должна вернуть true если первая строка пустая', () => {
        expect(isLess('', 'a')).toBe(true);
    });

    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isLess(123, 'abc')).toThrow(TypeError);
    });

    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isLess('abc', null)).toThrow(TypeError);
    });
});
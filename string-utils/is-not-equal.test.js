import { describe, test, expect } from 'bun:test';
import { isNotEqual } from './is-not-equal.js';

describe('Тесты isNotEqual', () => {
    test('должна вернуть true для разных строк', () => {
        expect(isNotEqual('hello', 'world')).toBe(true);
    });

    test('должна вернуть false для одинаковых строк', () => {
        expect(isNotEqual('abc', 'abc')).toBe(false);
    });

    test('должна вернуть true для строк разной длины', () => {
        expect(isNotEqual('hi', 'hello')).toBe(true);
    });

    test('должна вернуть false для двух пустых строк', () => {
        expect(isNotEqual('', '')).toBe(false);
    });

    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isNotEqual(123, 'hello')).toThrow(TypeError);
    });

    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isNotEqual('hello', null)).toThrow(TypeError);
    });
});
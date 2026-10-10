import { describe, test, expect } from 'bun:test';
import { isMore } from './is-more.js';

describe('Тесты isMore', () => {
    test('должна вернуть true если первая строка больше', () => {
        expect(isMore('cat', 'car')).toBe(true);
    });

    test('должна вернуть false если первая строка меньше', () => {
        expect(isMore('car', 'cat')).toBe(false);
    });

    test('должна вернуть false для одинаковых строк', () => {
        expect(isMore('hello', 'hello')).toBe(false);
    });

    test('должна вернуть true если первая строка длиннее при одинаковом начале', () => {
        expect(isMore('hello!', 'hello')).toBe(true);
    });

    test('должна вернуть false если первая строка короче при одинаковом начале', () => {
        expect(isMore('hello', 'hello!')).toBe(false);
    });

    test('должна сравнивать первый символ, даже если строки разной длины', () => {
        expect(isMore('b', 'aaaaa')).toBe(true);
    });

    test('должна учитывать регистр', () => {
        expect(isMore('Admin', 'admini')).toBe(false);
    });

    test('должна учитывать пробел в начале', () => {
        expect(isMore(' a', 'aa')).toBe(false);
    });

    test('должна учитывать пробел в конце', () => {
        expect(isMore('aa ', 'aa')).toBe(true);
    });

    test('должна вернуть false для двух пустых строк', () => {
        expect(isMore('', '')).toBe(false);
    });

    test('должна вернуть false если первая строка пустая', () => {
        expect(isMore('', 'a')).toBe(false);
    });

    test('должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isMore(123, 'abc')).toThrow(TypeError);
    });

    test('должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isMore('abc', null)).toThrow(TypeError);
    });
});
import { describe, test, expect } from 'bun:test';
import { isEqual } from './is-equal.js';

describe('Тесты isEqual', () => {
    test('Должна вернуть true для равных строк', () => {
        expect(isEqual('hello', 'hello')).toBe(true);
    });
    test('Должна вернуть true для равных пустых строк ', () => {
        expect(isEqual('', '')).toBe(true);
    });
    test('Должна вернуть false для разных строк одинаковой длины', () => {
        expect(isEqual('hello', 'world')).toBe(false);
    });
    test('Должна вернуть false для строк разной длины', () => {
        expect(isEqual('hi', 'hello')).toBe(false);
    });
    test('Должна вернуть false для строки с пробелом', () => {
        expect(isEqual('hi', 'hi ')).toBe(false);
    });
    test(' Должна вернуть false если одна строка пустая, а другая нет', () => {
        expect(isEqual('', 'a')).toBe(false);
    });
    test('Должна вернуть false если пробелы различаются ', () => {
        expect(isEqual(' a', 'a')).toBe(false);
    });
    test('Должна вернуть true для кириллицы', () => {
        expect(isEqual('привет', 'привет')).toBe(true);
    });
    test('Должна выбросить TypeError если первый аргумент не строка', () => {
        expect(() => isEqual(123, 'hello')).toThrow(TypeError);
    });
    test('Должна выбросить TypeError если второй аргумент не строка', () => {
        expect(() => isEqual('hello', null)).toThrow(TypeError);
    });
});
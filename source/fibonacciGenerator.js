'use strict';

/**
 * Функция, которая принимает одно число n и возвращает генератор, генерирующий первые n чисел последовательности Фибоначчи.
 * Если n меньше или равно 0, генератор не должен генерировать никаких значений.
 * @param {Number} n
 *
 * @example
 * // 1, затем 2, затем 3
 * const gen = fibonacciGenerator(3);
 * for(let value of gen) {
 *   alert(value);
 * }
 *
 * @returns {object}
 */
function* fibonacciGenerator(n) {
    if (n <= 0) return;

    if (n == 1) {
        yield 0;
        return;
    }

    let first = 0;
    let second = 1;
    for (let i = 0; i < n; ++i) {
        yield first;
        [first, second] = [second, first + second];
    }
}

const gen = fibonacciGenerator(3);
for(let value of gen) {
  alert(value); // 1, затем 2, затем 3
}

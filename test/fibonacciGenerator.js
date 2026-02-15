'use strict';

QUnit.module("Тестируем функцию fibonacciGenerator", function() {
    QUnit.test("Правильно генерирует первое число Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(1);

        assert.deepEqual([...fibGen], [0], "Должно быть сгенерировано только первое число Фибоначчи.");
    });

    QUnit.test("Правильно генерирует 5 первых чисел Фибоначчи", function(assert) {
        const fibGen = fibonacciGenerator(5);

        assert.deepEqual([...fibGen], [0, 1, 1, 2, 3], "Должны быть сгенерированы первые 5 чисел Фибоначчи.");
    });

    QUnit.test("Работает правильно с отрицательным числом чисел", function(assert) {
        const fibGen = fibonacciGenerator(-5);

        assert.deepEqual([...fibGen], [], "Генерация отрицательного числа должна вернуть пустой массив.");
    });

    QUnit.test("Корректность первых 7 чисел", function(assert) {
        assert.deepEqual(
            [...fibonacciGenerator(7)],
            [0, 1, 1, 2, 3, 5, 8],
            "Должны быть сгенерированы первые 7 чисел."
        );
    });

    QUnit.test("n = 0 возвращает пустую последовательность", function(assert) {
        const fibGen = fibonacciGenerator(0);

        assert.deepEqual(
            [...fibGen],
            [],
            "При n = 0 генератор не должен генерировать значения."
        );
    });

    QUnit.test("Работает правильно при передаче NaN", function(assert) {
        const fibGen = fibonacciGenerator(NaN);

        assert.deepEqual([...fibGen], [], "Генерация должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно при передаче пустой строки", function(assert) {
        const fibGen = fibonacciGenerator("");

        assert.deepEqual([...fibGen], [], "Генерация должна вернуть пустой массив.");
    });

    QUnit.test("Работает правильно при передаче непустой строки, приводящейся к number", function(assert) {
        assert.deepEqual(
            [...fibonacciGenerator("7")],
            [0, 1, 1, 2, 3, 5, 8],
            "Должны быть сгенерированы первые 7 чисел."
        );
    });

    QUnit.test("Работает правильно при передаче непустой строки, не приводящейся к number", function(assert) {
        assert.deepEqual(
            [...fibonacciGenerator("?")],
            [],
            "Генерация должна вернуть пустой массив."
        );
    });

    QUnit.test("Работает правильно при передаче null", function(assert) {
        assert.deepEqual(
            [...fibonacciGenerator(null)],
            [],
            "Генерация должна вернуть пустой массив."
        );
    });

    QUnit.test("Работает правильно при передаче boolean", function(assert) {
        assert.deepEqual(
            [...fibonacciGenerator(true)],
            [0],
            "true приводится к 1, должен вернуться один элемент."
        );
    });
});

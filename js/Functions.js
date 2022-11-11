// 0)
// Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65).
// Функція приймає в якості параметра вік людини і повертає значення булевського типу.
function isWorkingAgePerson(a) {
  let isWorkingAgePerson = false;
  if (a >= 16 && a <= 65) {
    isWorkingAgePerson = true;
  }
  return isWorkingAgePerson;
}
console.log(isWorkingAgePerson(20)); // true
console.log(isWorkingAgePerson(4)); // false
console.log(isWorkingAgePerson(88)); // false

// 1)
// Реалізувати функцію, яка приймає число і повертає булевське значення,
// чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).
function isNumberProst(b) {
  let isProst = false;
  for (let i = 2; i < b; i++) {
    if (b % i == 0) {
      break;
    } else {
      isProst = true;
    }
  }
  return isProst;
}
console.log(isNumberProst(20));
console.log(isNumberProst(5));

// 2)
// Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку)
function checkMultiplicity(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

// 3)
// Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника;
// функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).
/**
 * Existence check of Triangle with sides a,b,c
 * @param {number} a - a side
 * @param {number} b - b side
 * @param {number} c - c side
 * @returns {boolean} triangle exists or not
 */
const isTriangle = function (a, b, c) {
  let Triangle = false;
  if (a + b > c && a + c > b && b + c > a) {
    Triangle = true;
  }
  return Triangle;
};
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(1, 2, 40));

// 4)
// Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника
// (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення.
// Мінімум для однієї фігури на вибір.
/**
 * Square of rectangle(a,b) or parallelepiped(a,b,c)
 * @param {number} a - width
 * @param {number} b - length
 * @param {number} [с = 1] - height
 * @returns {number} Square of rectangle or parallelepiped
 */
const Square = function (a, b, c = 1) {
  return a * b * c;
};
console.log(Square(3, 4));
console.log(Square(3, 4, 5));

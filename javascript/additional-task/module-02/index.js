"use strict";
////////////////////  TASK - 05;

// let min = 1;
// const max = 100;

// for ( ; min < max; min += 1) {
//   if (min % 3 === 0) {
//     let fizz = "Fizz";
//     console.log(fizz);
//   } else if (min % 5 === 0) {
//     let buzz = "Buzz";
//     console.log(buzz);
//   } else {
//     console.log(min);
//   }
// }

/////////////////////// TASK - 06;

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (const value of numbers) {
//     if (value > num) {
//         newArray.push(value);
//     }
// }
// console.log(newArray);

//////////////////////  TASK - 08;

// const array = [];
// let input;
// let isNumber;

// do {
//  input = prompt("Введите число");
//  isNumber = Number.parseFloat(input);
//   if (!Number.isNaN(isNumber) && input !== null) {
//     array.push(isNumber);
//   }
// } while (!Number.isNaN(isNumber) && input !== null);

// console.log(array);

// let result = 0;

// for (const value of array) {
//     result = result + value;
// }
// console.log(`Сумма: ${result}`);

//////////////////// TASK - 09;

// const numbers = [12, 15, 25, 37, 41];

// const min = 12;
// const max = 41;

// const input = prompt(`Введите цифру между ${min} and ${max}`);
// const isNumber = Number.parseFloat(input);
// const isValidNumber = !Number.isNaN(isNumber);
// let result = `Вы не угадали`;

// if (isValidNumber) {
//   for (const value of numbers) {
//     if (value === isNumber) {
//       result = 'Поздравляем, Вы угадали!';
//       break;
//     }
//   }
//   alert(result);
// } else if (input === null) {
//   alert(`Приходите ещё!`);
// } else {
//   alert(`Было введено не число`);
// }

// //////////////////////////////////////

const numbers = [[4, 65, 765], [324, 54, 75], [456, 354, 45, 43, 324, 24]];
const flatArray = [];

for (let i = 0, max = numbers.length; i < max; i += 1) {
    console.log(numbers[i]);
    for (let j = 0, max = numbers[i].length; j < max; j += 1) {
        console.log(numbers[i][j]);
        flatArray.push(numbers[i][j]);
    }
}

console.log(flatArray);


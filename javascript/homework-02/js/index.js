"use strict";

let userInput;
const numbers = [];
let total = 0;
let isValid;

do {
  const input = prompt("Введите число");
  isValid = input !== null;
  if (isValid) {
    const asNumber = Number(input);
    numbers.push(asNumber);
  }
} while (isValid);

if (numbers.length > 0) {
    for (const key of numbers) {
        total += key;
      }
      alert(`Общая сумма чисел равна ${total}`);
}

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let num = 0;
let input;
let result;

do {
  input = prompt("Введите пароль");
  attempts = attempts - 1;
  for (let key of passwords) {
    if (input === key) {
      result = input === key;
      alert("Добро пожаловать!");
      break;
    }
  }
  if (attempts === 0) {
    alert("У вас закончились попытки, аккаунт заблокирован!");
  } else if (!result && input !== null) {
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  }
} while (num < attempts && !result && input !== null);

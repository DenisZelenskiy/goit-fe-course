"use strict";
//===================================TASK-1;

// const findGreaterThan = (num, arr) => arr.filter(elem => elem > num);
//   console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
//   console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
//   console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

// const multiplyBy = (num, arr) => arr.map(elem => elem * num);
//   console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
//   console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
//   console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// const summAllNumbers = (...args) => args.reduce((acc, item) => acc += item, 0);
//   console.log( summAllNumbers(1, 2, 3) ); // 6
//   console.log( summAllNumbers(1, 2, 3, 4) ); // 10
//   console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

// const findEvery = (num, arr) => arr.every(elem => elem >= num);

//   console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
//   console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
//   console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

//===================================TASK-2 ;

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];

// const getPropValues = (arr, prop) => arr.map(elem => elem[prop]);
// getPropValues(guests, "name");

// console.log(getPropValues(guests, "name")); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
// console.log(getPropValues(guests, "age")); // [20, 18, 30, 45]
// console.log(getPropValues(guests, "isActive")); // [true, false, true, false]

//===================================TASK-3 ;

// const guests = [
//   { name: "Mango", inactiveDays: 15, isActive: true },
//   { name: "Poly", inactiveDays: 8, isActive: false },
//   { name: "Ajax", inactiveDays: 32, isActive: false },
//   { name: "Chelsey", inactiveDays: 85, isActive: true }
// ];

// const setGuestState = (guests, period) =>
//   guests.map(
//     guest =>
//     guest.inactiveDays > period ? (guest.isActive = false) : (guest.isActive = true)
//   );

// //   // Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// //===================================TASK-4 ;

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// const getActiveGuests = guests => guests.filter(guest => guest.isActive);
// //   // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

//===================================TASK-5 ;

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// const getGuestsOlderThan = (guests, age) =>
//   guests.filter(guest => guest.age > age);
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []

//===================================TASK-6 ;

/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
//   ];

//   // Вызовы функции для проверки
//   console.log(
//     getGuestById(guests, 3)
//   ); // {id: 3, name: 'Ajax', age: 30}

//   console.log(
//     getGuestById(guests, 1)
//   ); // {id: 1, name: 'Mango', age: 20}

//   console.log(
//     getGuestById(guests, 5)
//   ); // undefined

//===================================TASK-7 ;

// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40
// };
// const summ = Object.values(order).reduce((acc, elem) => acc + elem, 0);
// console.log(summ); // 150
//===================================TASK-8 ;

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   cheese: 30,
//   chicken: 40
// };

// const orderA = {
//   bread: 2,
//   apples: 4,
//   chicken: 1
// };

// const orderB = {
//   bread: 1,
//   milk: 2,
//   cheese: 3
// };
// const getTotalPrice = (products, order) =>
//   Object.keys(order).reduce(
//     (acc, product) => (acc += products[product] * order[product]),
//     0
//   );

// console.log(getTotalPrice(products, orderA)); // 140
// console.log(getTotalPrice(products, orderB)); // 130

//===================================TASK-9 ;

// const guestsA = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true }
// ];

// const guestsB = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: true },
//   { name: "Ajax", isActive: true }
// ];
// const allGuestsActive = guests => guests.every(guest => guest.isActive);

// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false

// console.log(allGuestsActive(guestsB)); // true


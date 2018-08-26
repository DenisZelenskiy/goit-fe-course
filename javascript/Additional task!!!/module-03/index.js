"use strict";

//=====================TASK 1;

// function checkNumberType(num) {
//   return (num = num % 2 !== 0 ? "Odd" : "Even");
// }

//=====================TASK 2;

// const max = 40;

// const formatString = str => {
//   const length = str.length;
//   if (length > max) {
//     const newStr = str.slice(0, max) + "...";
//     return newStr;
//   } else {
//     return str;
//   }
// };

//======================TASK 3;

// const checkForSpam = str => {

//   const strLC = str.toLowerCase();
//   const isValidStr =
//     strLC.includes("spam") || strLC.includes("sale") ? true : false;
//     return isValidStr;
// };

//=======================TASK 4;

// function getPx(value) {
//   if (typeof value === "string") {
//     const newValue = Number.parseFloat(value);
//     if (Number.isNaN(newValue)) {
//       return (value = null);
//     }
//     return newValue;
//   } else {
//     return (value = null);
//   }
// }

//=======================TASK 5;

// const findLongestWord = function(str) {
//   const arr = str.split(" ");
//   let longStr = arr[0];

//   for (let item of arr) {
//     const lengthStr = longStr.length;
//     if (item.length > lengthStr) {
//       longStr = item;
//     debugger;
//     }
//   }
//   return longStr;
// };

//========================TASK 6;

// const findLargestNumber = function(arr) {
//   let largestNumber = arr[0];
//   for (let item of arr) {
//     if (largestNumber < item) {
//       largestNumber = item;
//     }
//   }
//   return largestNumber;
// };

//=========================TASK 7;

// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = function(...rest) {
//   for (let item of rest) {
//     if (!uniqueNumbers.includes(item)) {
//       uniqueNumbers.push(item);
//     }
//   }
// };

//==============================================TASK 8;

// const removeFromArray = function(arr, ...args) {

//   for (let item of args) {
//       if (arr.includes(item)) {
//        let index = arr.indexOf(item);
//        arr.splice(index, 1);
//       }
//   }
//   return arr;

// };


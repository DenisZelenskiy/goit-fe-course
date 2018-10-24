// "use strict";
//  TASK 01

// const colors = [
//   "#FFFFFF",
//   "#F44336",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548"
// ];
// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// const body = document.body;

// let timerId = null;
// let isActive = false;

// class Color {
//   constructor(colors) {
//     this.colors = colors;
//     this.timerId = null;
//     this.isActive = false;
//     this.randomIndex;
//   }
//   randomColor() {
//     this.randomIndex = Math.floor(Math.random() * this.colors.length);
//     body.style.backgroundColor = colors[this.randomIndex];
//   }
//   start() {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.timerId = setInterval(() => {
//         this.randomColor();
//       }, 1000);
//     }
//   }
//   stop() {
//     clearInterval(this.timerId);
//     this.timerId = null;
//     this.isActive = false;
//   }
// }

// const randomColor = new Color(colors);

// startBtn.addEventListener("click", randomColor.start.bind(randomColor));
// stopBtn.addEventListener("click", randomColor.stop.bind(randomColor));

//        TASK  02

// function getFormattedTime(time) {

//   let minute = parseInt((time / 1000 / 60) % 60)
//   let second = parseInt((time / 1000) % 60);
//   let milisecond = parseInt((time % 1000) / 100)

//   if (minute < 10) minute = "0" + minute;
//   if (second < 10) second = "0" + second;

//   return `${minute}:${second}:${milisecond}`
// }

// console.log(getFormattedTime(1523621052858)); // 04:12.8
// console.log(getFormattedTime(1523621161159)); // 06:01.1
// console.log(getFormattedTime(1523621244239)); // 07:24.2

//          TASK  03

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// class Timer {
//   constructor(startTime = null, deltaTime = null, id = null) {
//     this.startTime = null;
//     this.deltaTime = null;
//     this.id = null;
//     this.isActive = false;
//     this.pauseTime = 0;
//   }
//   startTimer() {
//     if (!this.isActive) {
//       this.isActive = true;
//       this.startTime = Date.now();

//       this.id = setInterval(() => {
//         this.currentTime = Date.now();
//         this.deltaTime = (this.currentTime - this.startTime) + this.pauseTime;
//         updateClockface(clockface, this.deltaTime)
//       }, 100);
//     }
//   }
//   stopTimer() {
//     this.pauseTime = this.deltaTime
//     clearInterval(this.id)
//     this.isActive = false;
//     this.deltaTime = 0;
//     this.startTime = null;
//   }



// }

// const newTimer = new Timer(timer);

// function getFormattedTime(time) {

//   let minute = parseInt((time / 1000 / 60) % 60)
//   let second = parseInt((time / 1000) % 60);
//   let milisecond = parseInt((time % 1000) / 100)

//   if (minute < 10) minute = "0" + minute;
//   if (second < 10) second = "0" + second;

//   return `${minute}:${second}.${milisecond}`
// }
// // /*
// // * Вспомогательные функции
// // */

// // /*
// // * Обновляет поле счетчика новым значением при вызове
// // * аргумент time это кол-во миллисекунд
// // */
// function updateClockface(elem, time) {

//   elem.textContent = getFormattedTime(time);
// }

// startBtn.addEventListener('click', newTimer.startTimer.bind(newTimer))
// stopBtn.addEventListener('click', newTimer.stopTimer.bind(newTimer))
// startBtn.addEventListener('focusin', setActiveBtn);
// stopBtn.addEventListener('focusin', setActiveBtn);

// // /*
// // * Подсветка активной кнопки
// // */
// function setActiveBtn({target}) {
//   if (target.classList.contains("active")) {
//     return;
//   }

//   startBtn.classList.remove("active");
//   stopBtn.classList.remove("active");

//   target.classList.add("active");
// }


//    TASK   04


/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

// const DELAY = 1000;

// let goodsAmount = 100;

// function processOrder(amount, delay = DELAY) {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(callback, delay)
//   }

//   )

//   function callback() {
//     resolve(amount <= goodsAmount ? 'Ваш заказ готов!' : 'К сожалению на складе не достаточно товаров!')
//     reject("Некорректный ввод!")
//   }


// }



// // Вызовы функции для проверки
// processOrder(50)
//   .then(x => console.log(x)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(50)
//   .then(x => console.log(x)) // Ваш заказ готов!
//   .catch(err => console.log(err));

// processOrder(500)
//   .then(x => console.log(x)) // К сожалению на складе недостаточно товаров!
//   .catch(err => console.log(err));

// processOrder("qwe")
//   .then(x => console.log(x))
//   .catch(err => console.log(err)); // Некоректный ввод!


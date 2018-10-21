"use strict";
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

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//   return "";
// }

// console.log(getFormattedTime(1523621052858)); // 04:12.8

// console.log(getFormattedTime(1523621161159)); // 06:01.1

// console.log(getFormattedTime(1523621244239)); // 07:24.2

//          TASK  03

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

// const clockface = document.querySelector(".js-clockface");
// const startBtn = document.querySelector(".js-timer-start");
// const stopBtn = document.querySelector(".js-timer-stop");

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// /*
// * Вспомогательные функции
// */

// /*
// * Обновляет поле счетчика новым значением при вызове
// * аргумент time это кол-во миллисекунд
// */
// function updateClockface(elem, time) {
//   // Используйте функцию getFormattedTime из задания #1
//   // elem.textContent = getFormattedTime(time);
// }

// /*
// * Подсветка активной кнопки
// */
// function setActiveBtn(target) {
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

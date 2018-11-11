"use strict";

//======================== TASK 1

// const list = document.querySelector('.list');

// const listItems = [
//   { name: "item 1", count: 2 },
//   { name: "item 2", count: 4 },
//   { name: "item 3", count: 12 },
//   { name: "item 4", count: 29 }
// ];

// const source = document.querySelector(".template-listItems").innerHTML.trim();

// const template = Handlebars.compile(source);

// const markup = template({ listItems });

// list.insertAdjacentHTML('afterbegin', markup);

//==========================TASK 2

// const root = document.querySelector(".root");
// const posts = [
//   { title: "post 1", text: "text 1", isFav: true },
//   { title: "post 2", text: "text 2", isFav: false },
//   { title: "post 3", text: "text 3", isFav: true },
//   { title: "post 4", text: "text 4", isFav: false }
// ];

// const source = document.querySelector(".template-post").innerHTML.trim();

// const template = Handlebars.compile(source);

// const markup = posts.reduce((acc, post) => (acc += template(post)), "");

// root.insertAdjacentHTML("afterbegin", markup);

// ==========================TASK 3

/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", validate);

function validate(evt) {}

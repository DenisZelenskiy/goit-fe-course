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

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", validate);

// function validate(evt) {}
































const str = 'The quick brown fox jumps over quick the lazy dog';

const paternA = /quick/;
const paternB = /qwerty/;
const paternC = 'quick';

console.log(`Результат : ${paternA.test(str)}`);
console.log(`Результат : ${paternB.test(str)}`);

console.log(`Результат : ${paternA.exec(str)}`);
console.log(`Результат : ${paternB.exec(str)}`);

console.log(`Результат : ${str.search(paternA)}`);
console.log(`Результат : ${str.search(paternB)}`);

// const patern = /quick/g;

// console.log(str.match(patern));

const patern = /brown/;

console.log(`str.replace(patern) : ${str.replace(patern, 'red')}`);

console.log('14-15-24'.replace(/-/g, ':'));

{
  const str = `1758-1982-7841-2275`;
  const pattern = /-/g;

  console.log('str.split(pattern) :', str.split());
  console.log('str.split(pattern) :', str.split(pattern, 3));
}

{
  const strA = 'quick brown fox';
  const strB = 'the  brown fox';

  const pattern = /^quick/;

  console.log(`Результат : ${pattern.test(strA)}`);
  console.log(pattern.test(strB));
}

{
  const strA = 'brown fox quick';
  const strB = 'the quick brown fox';
  const pattern = /quick$/;

  console.log(`Результат : ${pattern.test(strA)}`);
  console.log(`Результат : ${pattern.test(strB)}`);
}

{
  const strA = 'brown fox quick';
  const strB = 'quickquickquick';

  const pattern = /^quick$/;

  console.log(pattern.test(strA))
  console.log(pattern.test(strB))
}

{
  const str = 'The quICK The quiCk The quIcK';
  const pattern = /quick/i;

  const result = str.match(pattern);

  console.log(result);
}

{
  const str = 'The quick The quick The quick';
  const pattern = /quick/g;

  console.log(str.match(pattern));


}
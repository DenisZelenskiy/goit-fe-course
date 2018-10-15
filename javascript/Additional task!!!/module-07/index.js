"use strict";

//-------TASK 1;

// const list = document.querySelector('.categories');
// const item = list.children;
// const diplayText = (elem) => {
//     for (let i = 0, max = elem.length; i < max; i += 1) {
//         console.log('Категория :', elem[i].childNodes[0].textContent.trim());
//         console.log("Количество вложенных li: ", elem[i].childNodes[1].children.length)
//     }
// }

// diplayText(item);
// const items = document.querySelectorAll('.categories > li');

// items.forEach(item => {
//     console.log('Категория' , item.firstChild);
//     console.log('Количество вложенных li: ',item.firstElementChild.children.length);

// })

//----------TASK 2;

// const list = document.querySelector(".list");
// list.firstElementChild.style.color = "red";
// list.lastElementChild.style.color = 'blue';

//--------TASK 3;

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// const list = document.querySelector('.list');

// const itteration = () => i += 1;
// let i = 0;

// const addElement = (arr) => arr.map(elem => {
//     elem = document.createElement('li')
//     elem.textContent = arr[i];
//     list.append(elem);
//     itteration();
// }
// )
// addElement(elements);

// console.log(list);
//-------TASK 4;

// const body = document.body;
// const list = document.createElement('ul');
// body.prepend(list);
// let input;
// do {
//     input = prompt('');
//     if (input !== null) {
//         list.append(document.createElement('li'));
//         list.lastElementChild.textContent = input;
//     }
// }
// while (input !== null);
// console.log(body)
//--------TASK 5;

// const sizeFilter = document.querySelector('.size-filter');
// const inputValid = [...document.querySelectorAll('input')].filter(elem => elem.hasAttribute("checked"));
// const getInputData = (inputs) => inputs.map(elem => elem.getAttribute("value"));
// console.log(getInputData(inputValid));

// const sizeFilterChecked = [...document.querySelectorAll("input[checked]")];
// const getCheckedInputsData = inputs => {
//   const dataSet = inputs[0].dataset.prop;
//   const arrValue = [];
//   inputs.forEach(element => {
//     arrValue.push(element.value);
//   });
//   return {
//     value: arrValue,
//     prop: dataSet
//   };
// };
// console.log(getCheckedInputsData(sizeFilterChecked));

//--------TASK 6;

// const createPostCard = post => {
//   const poster = document.createElement("div");
//   poster.classList.add("post");
//   const postImage = document.createElement("img");
//   postImage.classList.add("post__image");
//   postImage.setAttribute("src", post.img);
//   postImage.setAttribute("alt", "post image");
//   const postTitle = document.createElement("h2");
//   postTitle.classList.add("post__title");
//   postTitle.textContent = post.title;
//   const postText = document.createElement("p");
//   postText.classList.add("post__text");
//   postText.textContent = post.text;
//   const button = document.createElement("a");
//   button.classList.add("button");
//   button.setAttribute("href", post.link);
//   button.textContent = "Read more";
//   poster.append(postImage, postTitle, postText, button);
//   return poster;
// };
// document.querySelector(".post").after(createPostCard(post));
// document.querySelector(".post").after(createPostCard(post));
// document.querySelector(".post").after(createPostCard(post));
// document.querySelector(".post").after(createPostCard(post));
// document.querySelector(".post").after(createPostCard(post));

//---------TASK 7;

// const root = document.querySelector("#root")
// const genColor = () => "#" + ((1 << 24) * Math.random() | 0).toString(16);
// const createBoxes = (num) => {
//     const container = document.createElement('div');
//     const list = [];
//     for (let i = 0, width = 30, height = 30; i < num; i += 1, width += 10, height += 10) {
//         let div = document.createElement('div');
//         div.style.width = width + "px";
//         div.style.height = height + "px";
//         div.style.backgroundColor = genColor();
//         list.push(div);
//     }
//     container.append(...list);
//     return container;
// };
// root.append(createBoxes(111111));

document.createElement(elem);
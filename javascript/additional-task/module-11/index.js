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

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");
const pattern = /^[a-z]+[ -][a-z]+$/;
const result = {}

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;

  const isvalidFirstname = pattern.test(firstnameValue);
  const isvalidLastname = pattern.test(lastnameValue);

  result.firstname = isvalidFirstname;
  result.lastname = isvalidLastname;

  console.log(result);
}


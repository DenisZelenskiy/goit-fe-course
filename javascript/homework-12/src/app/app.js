import listUrl from "./../templates/template.hbs";
import * as storage from "./storage";

const bookmarks = [];

const container = document.querySelector(".container-list");
const button = document.querySelector(".button-js");
const input = document.querySelector(".input-js");
const form = document.querySelector(".form-js");
listUrl;
const list = document.querySelector(".list-js");

const createHtml = arr =>
  arr.reduce((acc, value) => {
    console.log("value ", value);
    console.log(listUrl(value));
    acc += listUrl({ value });
    return acc;
  }, "");

const handleAddUrl = event => {
  event.preventDefault();

  const value = input.value;

  if (value === "") {
    alert("Вы ввели пустую строку");
    return;
  }

  if (bookmarks.includes(value)) {
    alert(`${value} такая закладка уже существует!`);
    input.value = "";
    return;
  }
  bookmarks.unshift(value);
  console.log(bookmarks);

  console.log(createHtml(bookmarks));

  form.reset();
};

const handleDeleteUrl = e => {
  const target = e.target;
  const nodeName = target.nodeName;
  let value;
  let index;

  if (nodeName === "BUTTON") {
    value = target.previousElementSibling.innerHTML;
    index = bookmarks.indexOf(value);

    bookmarks.splice(index, 1);

    target.parentNode.remove();
  }
};

form.addEventListener("submit", handleAddUrl);

list.addEventListener("click", handleDeleteUrl);

import axios from 'axios';
import createListElem from "./../templates/template.hbs";
import * as storage from "./storage";

const form = document.querySelector('.form-js');
const input = document.querySelector('.input-js');
const list = document.querySelector('.list-js');
const pattern = /[a-z0-9-_]\.([a-z]{2,})/;
const API_KEY = '5bfac41586ca505c353b82c68b844317d858f00d0518e';
const spinner = document.querySelector('.box-1');

const bookmraksStorageKey = 'bookmarks';
const bookmarksStorage = storage.get('bookmarks');
let bookmarks = bookmarksStorage ? bookmarksStorage : [];

if (bookmarks.length !== 0) addListPage(bookmarks);

let uniqueId;

form.addEventListener('submit', handleClickAdd)
list.addEventListener('click', handleClickDel)


// ================= HELPERS ============
function handleClickAdd(e) {
  e.preventDefault();
  axios
  uniqueId = String(Date.now())

  addBookmarkData()

}
function addDataStorage(uniqueId, { title, url, image }) {
  bookmarks.unshift({ uniqueId, title, url, image });
}
function addBookmarkData() {
  const value = input.value.trim();
  const isValidUrl = pattern.test(value);

  form.reset()


  if (value === '') {
    alert('Вы ввели пустую строку!!!')
    return;
  }

  if (!isValidUrl) {
    alert('Не валидная URL')
    return;
  }
  spinner.style.display = "block";
  axios.get(`https://api.linkpreview.net/?key=${API_KEY}&q=${value}`).then(response => {
    const isCopy = bookmarks.some(el => el.url === response.data.url);
    spinner.style.display = "none";


    if (isCopy) {
      alert('Такая закладка уже существует!!!')
      return;
    }

    addDataStorage(uniqueId, response.data)
    console.log(response.data);
    storage.set(bookmarks)

    addListPage(bookmarks);
  }
  ).catch(err => {
    spinner.style.display = "none";
    console.log(err);

  })

}

function createList(arr) {
  const markup = arr.reduce((acc, value) => {
    acc += createListElem(value);
    return acc
  }, '')
  console.log(markup);
  return markup;

}

function addListPage(arr) {
  list.innerHTML = createList(arr)
}

function handleClickDel(e) {
  const target = e.target;
  const nodeName = target.nodeName;


  if (nodeName === 'BUTTON') {
    const li = target.closest(".list-item-js")
    const id = li.dataset.id;
    bookmarks = bookmarks.filter(elem => elem.uniqueId !== id);

    storage.set(bookmarks);

    li.remove()

  }

}
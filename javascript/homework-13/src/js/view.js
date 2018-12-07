import validateInput from "./storage/validator";
import createListElem from "./template/template.hbs";
import EventEmitter from "./storage/event-emitter";
import * as storage from "./storage/storage";

export default class View extends EventEmitter {
  constructor() {
    super();
    this.form = document.querySelector(".form-js");
    this.input = this.form.querySelector(".input-js");
    this.list = document.querySelector(".list-js");
    this.bookmarksStorage = storage.get('bookmarks') || [];
    this.form.addEventListener('submit', this.formSubmit.bind(this));
    window.addEventListener('DOMContentLoaded', this.domReady.bind(this))
  }


  formSubmit(e) {
    e.preventDefault();
    const value = this.input.value;
    const isValidUrl = validateInput(value);

    this.form.reset();

    if (value === "") {
      alert("Вы ввели пустую строку!!!");
      return;
    }

    if (!isValidUrl) {
      alert("Не валидная URL");
      return;
    }
    this.emit('create', value);
  }

  domReady() {
    this.emit('loaded', this.bookmarksStorage)
  }

  createMarkup(list) {
    console.log(list);
    const markup = list.reduce((acc, value) => {
      acc += createListElem(value);

      return acc;
    }, '');

    this.list.innerHTML = markup;
    this.list.addEventListener('click', this.launchEmitRemove.bind(this))
  }

  launchEmitRemove(e) {
    if (e.target.dataset.action === 'remove') {
      const button = e.target;
      const card = button.parentNode;
      this.emit('delete', card.id)
    }
  }

  removeCard(id) {
    console.log(id);
    const card = document.getElementById(id);
    card.remove();
  }

}
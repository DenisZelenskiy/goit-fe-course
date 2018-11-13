'use strict';


window.addEventListener('DOMContentLoaded', () => {

    const createBtn = document.querySelector('.js-create');

    const backdrop = document.querySelector(".js-modal-backdrop");
    const closeBtn = document.querySelector(".js-close-modal");
    const body = document.body;

    // Modal window management

    class ModalFunction {
        constructor(closeBtn, backdrop) {
            this.closeBtn = closeBtn;
            this.backdrop = backdrop;
        }

        show(event) {

            if (event.target.nodeName !== "BUTTON") return;
            this.backdrop.classList.toggle("modal-hidden");
        }

        hide({ target }) {
            if (target === this.closeBtn || target === this.backdrop) {
                this.backdrop.classList.toggle("modal-hidden");
            }
        }

        hideEscape(event) {
            const validEsc = event.code === "Escape";
            if (validEsc) {
                this.backdrop.classList.add("modal-hidden");
            }
        }
    }
    const modalF = new ModalFunction(closeBtn, backdrop);

    createBtn.addEventListener("click", modalF.show.bind(modalF));
    body.addEventListener("click", modalF.hide.bind(modalF));
    document.addEventListener("keydown", modalF.hideEscape.bind(modalF));

    const sendInput = document.querySelector('.js-send-form-input');
    const sendTextarea = document.querySelector('.js-send-form-textarea');
    const sendForm = document.querySelector('.js-send-form');
    const list = document.querySelector('.js-list');

    // CREATE ITEM li
    function createElement(input, textarea) {

        const li = document.createElement('li');
        li.setAttribute('data-id', Date.now());
        li.classList.add('list-item');

        const dateNow = Date.now();
        const dateObj = new Date();
        const date = formatDate(dateObj.getDate(dateNow));
        const month = formatDate(dateObj.getMonth(dateNow) + 1);
        const year = dateObj.getFullYear(dateNow);
        const hours = formatDate(dateObj.getHours(dateNow));
        const minute = formatDate(dateObj.getMinutes(dateNow));

        const pDate = document.createElement('p');
        pDate.classList.add('list-item__date');
        pDate.textContent = `Дата создания : ${date}.${month}.${year}`;

        const pTime = document.createElement('p');
        pTime.classList.add('list-item__time');
        pTime.textContent = `Время создания : ${hours}:${minute}`;

        const pCustomer = document.createElement('p');
        pCustomer.classList.add('list-item__text-customer');
        pCustomer.textContent = `Заказчик : ${input}`;

        const pTask = document.createElement('p');
        pTask.classList.add('list-item__text-task');
        pTask.textContent = `Задача :\n ${textarea}`;

        li.append(pDate, pTime, pCustomer, pTask);
        list.append(li)
    }
    // HELPERS
    function formatDate(value) {
        let result = value;

        if (result < 10) {
            result = `0${result}`
        }

        return result;
    }

    //  FUNCTION by click send button
    function formProcessing(event) {
        event.preventDefault();

        createElement(sendInput.value, sendTextarea.value);


        backdrop.classList.toggle('modal-hidden')
        sendForm.reset()
    }
    sendForm.addEventListener('submit', formProcessing)

});


const url = 'http://localhost:3001/tasks';


// fetch('http://localhost:3001/tasks/3', {
//     method: 'DELETE',
// }).then(response => response.json()).catch(err => console.log(err));
fetch(url).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
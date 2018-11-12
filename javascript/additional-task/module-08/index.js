"use strict";
// const gallery = $qs('.js-gallery');

// $on(gallery, 'click', onGalleryClick);

// function onGalleryClick({target}) {
//   const targetName = target.nodeName;

//   if (targetName !== "IMG") return;
//   const targetSrc = target.src;
//   console.log(targetSrc);

// };

//TASK 01;

// const btn = $qs('.button');
// $on(btn, 'click', function () {
//     let num = Number(this.textContent) + 1;
//     btn.textContent = num + "";
// });

//TASK 02;

// $on(document, "DOMContentLoaded", () => {
//   const button = $qs('button');
//   const inputs = $qsa('input');
//   const result = $qs('.result');
//   $on(button, 'click', onClickSum);

//   function onClickSum() {
//     let sum = 0;
//     inputs.forEach(input => {
//       sum += Number(input.value);

//       console.log('it`s sum:',sum)
//     });
//     result.textContent = sum;
//   }
// });

//TASK 03;

// $on(document, 'DOMContentLoaded', () => {
//   const span = $qs('.value');

//   const jsSub = $qs('.js-sub');
//   const jsAdd = $qs('.js-add');
//   $on(document.body, 'click', ({ target }) => {
//     const spanNum = Number(span.textContent);
//     if (target.nodeName !== "BUTTON") return;

//     if (target.className.includes('js-sub')) {

//       if (spanNum === 0) return;
//       span.textContent = spanNum - 1;
//     } else if (target.className.includes('js-add')) {
//       span.textContent = spanNum + 1;
//     }
//   })
// });

//TASK 04;

// $on(document, 'DOMContentLoaded', () => {
//   const form = $qs('.question-form');
//   const result = $qs(".result");

//   $on(form, 'submit', (event) => {
//     event.preventDefault();
//     const validInput = $qs('input[type=radio]:checked');
//     if (validInput === null) {
//       alert('Ничего не выбрано!')
//       return
//     }
//     result.textContent = `Result : ${validInput.value.toUpperCase()}`;
//   })
// })

//TASK 05;

// $on(document, 'DOMContentLoaded', () => {
//   const images = $qs(".images");
//   $on(images, 'click', (event) => {
//     const currentImg = event.target;
//     if (currentImg.nodeName !== 'IMG') return;
//     alert(currentImg.src);
//   })
// })

//TASK 06;

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

// $on(document, 'DOMContentLoaded', () => {
//   const list = $qs('.list');
//   $on(list, 'click', (event) => {
//     const currentLi = event.target.parentNode;
//     if (currentLi.nodeName !== 'LI') return;

//     list.removeChild(currentLi);

//   });
// })

//TASK 07;
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/
// $on(document, "DOMContentLoaded", () => {
//   const container = $qs(".inputs");
//   const inputs = [...$qsa("input", container)];

//   $on(container, "focusout", validInput);

//   function validInput() {
//     let valueLength;
//     let validLength;

//     inputs.forEach(input => {
//       valueLength = input.value.length;
//       validLength = Number(input.dataset.length);

//       if (valueLength === validLength) {
//         input.style.outlineColor = "green";
//       } else {
//         input.style.outlineColor = "red";
//       }
//     });
//   }
// });

//TASK 08;

// const input = $qs(".input");
// const inputValue = $qs(".input-value");

// $on(input, "focus", () => console.log("Input is in focus!"));
// $on(input, "input", addText);

// function addText() {
//   inputValue.textContent = input.value;
// }

//TASK 09;
// $on(document, "DOMContentLoaded", () => {
//   const openModal = $qs(".js-open-modal");
//   const modalBackdrop = $qs(".js-modal-backdrop");

//   $on(document.body, "click", showModal);
//   $on(document.body, "click", closeBtn);
//   $on(document.body, "click", closeBackdrop);

//   function showModal({ target }) {
//     const targetName = target.nodeName;
//     if (targetName !== "BUTTON") return;
//     modalBackdrop.classList.remove("modal-hidden");
//   }

//   function closeBtn({ target }) {
//     const closeModal = target.classList.contains("js-close-modal");
//     if (!closeModal) return;
//     modalBackdrop.classList.add("modal-hidden");
//   }

//   function closeBackdrop({ target }) {
//     const validBackdrop = target.classList.contains("js-modal-backdrop");
//     if (!validBackdrop) return;
//     modalBackdrop.classList.add("modal-hidden");
//   }
// });
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.

    

*/
// const backdrop = $qs(".js-modal-backdrop");
// const closeBtn = $qs(".js-close-modal");
// const body = document.body;

// class ModalFunction {
//   constructor(closeBtn, backdrop) {
//     this.closeBtn = closeBtn;
//     this.backdrop = backdrop;
//   }

//   show(event) {
//     const showBtn = $qs(".js-open-modal");
//     const targetName = event.target.nodeName;
//     const validBtn = event.target.classList.contains("js-open-modal");

//     if (targetName !== "BUTTON" || !validBtn) return;
//     this.backdrop.classList.toggle("modal-hidden");
//   }

//   hide({ target }) {
//     if (target === this.closeBtn || target === this.backdrop) {
//       this.backdrop.classList.toggle("modal-hidden");
//     }
//   }

//   hideEscape(event) {
//     const validEsc = event.code === "Escape";
//     if (validEsc) {
//       this.backdrop.classList.add("modal-hidden");
//     }
//   }
// }
// const modalF = new ModalFunction(closeBtn, backdrop);

// $on(body, "click", modalF.show.bind(modalF));
// $on(body, "click", modalF.hide.bind(modalF));
// $on(document, "keydown", modalF.hideEscape.bind(modalF));

//TASK 10;

// $on(document, "DOMContentLoaded", () => {
//   const menu = $qs(".js-menu");
//   const links = [...$qsa(".menu-link")];

//   $on(menu, "click", activeLink);
//   function activeLink({ target }) {

//     if (target.nodeName !== "A") return;
//     links.forEach(elem => elem.classList.remove("menu-link-active"));

//     target.classList.add("menu-link-active");
//   }
// });


// !!!!!!!!!!!!!!!!!!!!!!! debounced AND throttled

// const input = $qs(".js-input");
// const myHandler = event => console.log(input.value);
// const tHandler = throttled(200, myHandler);
// const dHandler = debounced(200, myHandler);

// function throttled(delay, fn) {
//   let lastCall = 0;
//   return function(...args) {
//     const now = new Date().getTime();
//     if (now - lastCall < delay) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   };
// }

// $on(input, "input", tHandler);

// function debounced(delay, fn) {
//   let timerId;
//   return function(...args) {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//       fn(...args);
//       timerId = null;
//     }, delay);
//   };
// }

// // $on(input, "input", dHandler);

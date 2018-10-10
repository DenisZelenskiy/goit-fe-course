'use strict';
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

//TASK 08;

//TASK 09;

//TASK 10;

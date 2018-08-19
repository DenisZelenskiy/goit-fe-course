"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";
const userLogin = prompt("Введите логин");
const cancel = "Отменено пользователем!";
const welcome = "Добро пожаловать!";
const denied = "Доступ запрещен!";

if (userLogin === null) {
  alert(cancel);
} else if (userLogin !== adminLogin) {
  alert(denied);
} else {
  const userPassword = prompt("Введите пароль");
  if (userPassword === null) {
    alert(cancel);
  } else if (userPassword !== adminPassword) {
    alert(denied);
  } else if (userPassword === adminPassword) {
    alert(welcome);
  }
}

const sharm = "sharm";
const hurgada = "hurgada";
const taba = "taba";
const placesSharm = 15;
const placesHurgada = 25;
const placesTaba = 6;
const places = prompt("Введите число необходимых мест");
const isNumber = Number(places);
const isValidValue = !Number.isNaN(isNumber) && places !== null;

if (isValidValue) {
  if (placesTaba >= isNumber) {
    const userChoise = confirm(
      `Есть место в группе ${taba} , вы согласны быть в этой группе?`
    );
    if (userChoise) {
      alert(`Приятного путешествия в группе ${taba}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (placesSharm >= isNumber) {
    const userChoise = confirm(
      `Есть место в группе ${sharm} , вы согласны быть в этой группе? `
    );
    if (userChoise) {
      alert(`Приятного путешествия в группе ${sharm}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (placesHurgada >= isNumber) {
    const userChoise = confirm(
      `Есть место в группе ${hurgada} , вы согласны быть в этой группе? `
    );
    if (userChoise) {
      alert(`Приятного путешествия в группе ${hurgada}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else {
    alert('Извините, столько мест нет ни в одной группе!');
  }
} else {
  alert("Ошибка ввода");
}


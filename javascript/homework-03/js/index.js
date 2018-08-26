"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  const min = 4;
  const max = 16;
  const lengthLogin = login.length;
  const loginValid = lengthLogin >= min && lengthLogin <= max;
  return loginValid;
};

const isLoginUnique = function(allLogins, login) {
  const loginUnique = !allLogins.includes(login);
  return loginUnique;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      return console.log("Логин успешно добавлен!");
    } else {
      return console.log("Такой логин уже используется!");
    }
  } else {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
};

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "sd"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "My Name aleksey!"); //'Логин успешно добавлен!'
addLogin(logins, "Aj4x1sBozz"); // 'Такой логин уже используется!'

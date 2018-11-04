"use strict";

//  ================     GET USERS
const jsGet = document.querySelector(".js-get");
const list = document.querySelector(".js-list");
const url = "https://test-users-api.herokuapp.com/users/";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

function fetchGETUsers(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("Error :", response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

const getAllUsers = evt => {
  evt.preventDefault();
  fetchGETUsers(url).then(createListItem);
};

jsGet.addEventListener("click", getAllUsers);

function createListItem(arr) {
  list.innerHTML = arr.reduce((acc, user) => {
    return (acc += createItem(user));
  }, "");
}

function createItem({ id, name, age }) {
  return `<li><ul>
    <li>ID : ${id} </li>
    <li>NAME : ${name} </li>
    <li>AGE : ${age} </li>
    </ul></li>`;
}

// GET USER BY ID

const jsGetId = document.querySelector(".js-getId");
const inputById = document.querySelector(".inputById");
const listUser = document.querySelector(".js-list-user");
const form = document.querySelector(".search-form");

function handleClick(evt) {
  evt.preventDefault();
  let id = inputById.value;
  getUserById(id).then(data => {
    if (data.status === 500) {
      return alert("Такого пользователя нету!!!");
    }

    if (id === "") {
      return alert("Введите ID!!!");
    }
    listUser.innerHTML = createItem(data.data);
  });

  form.reset();
}

function getUserById(id) {
  let userId = id;
  return fetch(url + userId)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("Error : ", response.statusText);
    })
    .then(data => data)
    .catch(err => console.log(err));
}

form.addEventListener("submit", handleClick);

// ADD USER !!!

const addForm = document.querySelector(".add-form");
const jsName = document.querySelector(".js-name");
const jsAge = document.querySelector(".js-age");
const jsAdd = document.querySelector(".js-add");
const result = document.querySelector(".result");

function handleClickAdd(evt) {
  evt.preventDefault();
  let name = jsName.value;
  let age = Number(jsAge.value);

  addUser(name, age).then(user => {
    if (user.status === 500) {
      alert("Извините пользователь не добавлен!");
      return;
    }
    pullOutID(user.data);
    alert("Пользователь добавлен!");
  });

  addForm.reset();
}

function addUser(name, age) {
  let options = {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch(err => console.log(err));
}

function pullOutID({ _id }) {
  result.innerHTML = _id;
}

addForm.addEventListener("submit", handleClickAdd);

// DELETE USER BY ID

const deleteForm = document.querySelector(".delete-form");
const jsId = document.querySelector(".js-id");
const button = document.querySelector(".js-delete");

function handleClickDelete(evt) {
  evt.preventDefault();
  let id = jsId.value;
  let options = {
    method: "DELETE"
  };
  removeUser(id, options).then(data => {
    if (data.status === 500) {
      return alert(`Пользователя с ID - ${id} не существует!!!`);
    }
    if (data.status === 404) {
      return alert("Введите ID!!!");
    }
    alert(`Пользователь с ID - ${id} успешно удалён!!!`);
  });

  deleteForm.reset();
}

function removeUser(id, options) {
  return fetch(url + id, options)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Error :", response.statusText);
    })
    .catch(err => console.log(err));
}

deleteForm.addEventListener("submit", handleClickDelete);

// UPDATE USER BY ID

const updateForm = document.querySelector(".update-form");
const jsNameUp = document.querySelector(".js-name-up");
const jsAgeUp = document.querySelector(".js-age-up");
const jsIdUp = document.querySelector(".js-id-up");
const jsUpdate = document.querySelector(".js-update");

function handleClickUpdate(evt) {
  evt.preventDefault();
  const id = jsIdUp.value;
  const name = jsNameUp.value;
  const age = Number(jsAgeUp.value);
    console.log(age);
  const obj = {
    name,
    age
  };

  updateUser(id, obj).then(data => {
    if (data.status === 500) return alert("Такого пользователя нету!!!");

    if (data.status === 404) return alert("Введите ID пользователя");

    alert(
      `Пользователь обновлён Имя : ${data.data.name} \n Age : ${data.data.age}`
    );
  });

  updateForm.reset();
}
function updateUser(id, user) {
  if (user.name === "" || isNaN(user.age) || user.age === 0) {
    return alert("Введите корректные данные");
  }

  const options = {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  return fetch(url + id, options)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("Error", response.statusText);
    })
    .catch(err => console.log(err));
}

updateForm.addEventListener("submit", handleClickUpdate);

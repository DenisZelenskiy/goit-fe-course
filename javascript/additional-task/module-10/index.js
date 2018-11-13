"use strict";

// =====================TASK 1

// const input = document.querySelector("input");
// const submitBtn = document.querySelector(".js-submit");
// const result = document.querySelector(".js-result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";
// const tbody = document.querySelector(".tbody");

// submitBtn.addEventListener("click", fetchCountryData);

// /*
//   @param {FormEvent} evt
// */
// function fetchCountryData(evt) {
//   evt.preventDefault();
//   const value = input.value;

//   fetch(`https://restcountries.eu/rest/v2/name/${value}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }

//       throw new Error("Error!!!");
//     })
//     .then(data => {
//       console.log(data);
//         tbody.innerHTML = data.reduce((acc, obj) => acc += createHTML(obj), "");
//     })
//     .catch(err => console.log(err));
// }

// function createHTML({name, capital, currencies, flag}) {
//     return `<tr> <td>${name}</td>
//     <td>${capital}</td>
//     <td>${currencies[0].code}</td>
//     <td><img src='${flag}' alt='flag'></td>
//     </tr>`
// }

// =====================TASK 2

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = "https://api.github.com/users/";

// submitBtn.addEventListener("click", fetchUserData);

// /*
//   @param {FormEvent} evt
// */
// function fetchUserData(evt) {
//   evt.preventDefault();
//   const value = input.value;
//   fetch(apiUrl + value)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }

//       throw new Error("Error!!!");
//     })
//     .then(data => {
//       result.innerHTML = createHTML(data);
//       console.log(data);
//     })
//     .catch(err => console.log(err));
// }

//  function createHTML({ avatar_url, login, bio, public_repos }) {
//  return `<ul><li>Avatar : <img src="${avatar_url}" alt="avatar"></li>
//   <li>Username : ${login}</li>
//   <li>Bio : ${bio}</li>
//   <li>Public : ${public_repos}</li> </ul>`;
// }

// =====================TASK 3

// const getBtn = document.querySelector(".js-get");
// const result = document.querySelector(".result");
// const url = "https://test-users-api.herokuapp.com/users/";
// const tbody = document.querySelector(".tbody");
// // const headers = {}

// getBtn.addEventListener("click", fetchUsers);

// function fetchGet(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.ok) return response.json();

//       throw new Error("Error :", response.statusText);
//     })
//     .then(data => data.data)
//     .catch(err => console.log(err));
// }

// function createHTML(users) {
//   console.log(users);
//   tbody.innerHTML = users.reduce(
//     (acc, { id, name, age }) =>
//       (acc += `<tr> <td>${id}</td> <td>${name}</td> <td>${age}</td> </tr>`),
//     ""
//   );
// }
// /*
//   @param {FormEvent} evt
// */
// function fetchUsers(evt) {
//   evt.preventDefault();
//   fetchGet(url).then(createHTML);
// }

// =====================TASK 4

// const input = document.querySelector("input");
// const postBtn = document.querySelector(".js-post");
// const result = document.querySelector(".result");
// const url = "https://test-users-api.herokuapp.com/users/";

// postBtn.addEventListener("click", getUserByName);

// function getUserByName(evt) {
//   evt.preventDefault();
//   const value = input.value;
//   fetchGetUsers(url)
//     .then(arr => findByName(arr, value))
//     .then(user => {
//       if (user == undefined) {
//         result.innerHTML = "Такого пользователя в списке нет!";
//         return;
//       }
//       createHTML(user);
//     });
// }

// function fetchGetUsers(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.ok) return response.json();

//       throw new Error("Error : ", response.statusText);
//     })
//     .then(data => data.data)
//     .catch(err => console.log(err));
// }

// function findByName(arr, value) {
//   return arr.find(user => user.name.toLowerCase() === value.toLowerCase());
// }

// function createHTML({ id, name, age }) {
//   result.innerHTML = `ID : ${id}<br> Name : ${name}<br> Age: ${age}`;
// }


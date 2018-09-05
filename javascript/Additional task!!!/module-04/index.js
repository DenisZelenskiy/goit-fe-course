"use strict";

//=============================TASK 1;

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user["hobby"] = "javascript";
// delete user.premium;

// for (let key in user) {
//   if (user.hasOwnProperty('key')) {
//     console.log(`${key} : ${user["key"]}`);
//   }
// }

// const userKeys = Object.keys(user);
// for (let key of userKeys) {
//   console.log(`${key} : ${user[key]}`);
// }

// const userEntries = Object.entries(user);
// for (let entry of userEntries) {
//   console.log(entry);
//     console.log(`${entry[0]} : ${entry[1]}`);
// }

//==========================TASK 2;

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// function whoBestManager(obj) {
//   let total = 0;
//   let manager;
//   for (let key in obj) {
//     if (total < obj[key]) {
//         total = obj[key];
//       manager = key;
//     }
//   }
//   console.log(`Менеджер - ${manager} сделал продаж ${total}`);
// }

// whoBestManager(tasksCompleted);

//==========================TASK 3;

// const countProps = function (obj) {
//     let isArr = Object.keys(obj);
//     return isArr.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 3, c: "hello" })); // 3

//===========================TASK 4;

// const isObjectEmpty = function (obj) {
//     if (Object.keys(obj).length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

//================================TASK 5;

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
// const countTotalSalary = function (obj) {
//     let total = 0;
//     const isArr = Object.values(obj);
//     for (let key of isArr) {
//         total += key;
//     }
//     return total;
// };

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

//=================================TASK 6;

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" }
// ];

// const getAllPropValues = function(arr, prop) {
//   const resultArr = [];
//   for (let key of arr) {
//     if (key.hasOwnProperty(prop)) {
//       resultArr.push(key[prop]);
//     }
//   }
//   return resultArr;
// };
// // const test = [{ name: "Alex" }, { name: "Drenon" }, { name: "Chuck Norris" }];

// // // Вызовы функции для проверки
// // console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']

// // console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']

// // console.log(getAllPropValues(users, "active")); // []

// console.log(getAllPropValues(test, "name"));
//==========================TASK 7;

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// function User (name, isActive, age, friends) {
//     this.name = name;
//     this.isActive = isActive;
//     this.age = age;
//     this.friends = friends;
//     this.getUserInfo = function () {
//         console.log(`${this.name} is , ${this.age} years old and has ${this.friends} friends.`);
//     };
// }

// const user1 = new User('Alex', true, 23, 2543);
// user1.getUserInfo();
// const user2 = new User('Vasya', false, 43, 1);
// user2.getUserInfo();

//===============================TASK 8;

/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

// const store = {
//   products: ["bread", "cheese", "milk", "apples"],
//   managers: ["poly", "mango", "ajax"],
//   addManager(manager) {
//     this.managers.push(manager);

//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);

//     return this.products;
//   }
// };

// store.addManager("chelsey"); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager("mango"); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// //=======================================TASK 9;

// /*
//   Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account({ login, password, type = "regular" }) {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//         Login: ${this.login},
//         Pass: ${this.password},
//         Type: ${this.type}
//       `);
//   };
// }

// const account = new Account({
//   login: "Mango",
//   password: "qwe123",
//   type: "premium"
// });
// console.log(account);

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// console.log(account.changePassword("asdzxc")); // 'asdzxc'

// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

//=======================

function Shop({ products = [], managers = [] }) {
  this.products = products;
  this.managers = managers;

  this.addManager = function(params) {
    const manager = new Manager(params);

    this.managers.push(manager);
  };

  this.makeSale = function(managerName, productName) {
    for (const manager of this.managers) {
      if (manager.name === managerName) {
        manager.sell(productName, this.products);
      }
    }
  };

  this.addProduct = function(product) {
    this.products.push(product);
  };
  this.findProduct = function(productName) {
    for (let elem of this.products) {
      if (elem.name === productName) {
        return elem;
      }
    }
  };
  this.addProductAmount = function(productName, num) {
    const product = this.findProduct(productName);
    product.amount += num;
  };
  this.subtractProductAmount = function(productName, num) {
    const product = this.findProduct(productName);
    product.amount -= num;
    console.log(product);
  };
  this.getAllProducts = function() {
    return this.products;
  };
}

function Manager({ name = "manager", salesCount = 0 }) {
  this.name = name;
  this.salesCount = salesCount;

  this.sell = function(productName, products) {
    console.log("Inside manager.sell, productName : ", productName);
    console.log("Inside manager.sell, products : ", products);

    console.log(`selling ${productName}`);
  };
}

const products = [
  { name: "apples", amount: 100, price: 30 },
  { name: "grapes", amount: 150, price: 40 },
  { name: "bananas", amount: 200, price: 50 }
];

const shopA = new Shop({ products });

const manager = new Manager({ name: "Alex", salesCount: 10 });

shopA.addManager({ name: "Alex", salesCount: 10 });

shopA.addManager({ name: "Chuck", salesCount: 15 });

shopA.makeSale("Chuck", "bananas");

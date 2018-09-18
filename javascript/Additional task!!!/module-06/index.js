"use strict";

//=================================TASK 1;

// function Account(login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }
// Account.prototype.getAccountInfo = function() {
//   console.log(
//     `login : ${this.login} \n email : ${this.email} \n friendCount : ${
//       this.friendsCount
//     }`
//   );
// };

// const one = new Account("Vasya", "Vasya@gmail.com", 26);
// const two = new Account("Petya", "Petya@gmail.com", 32);
// one.getAccountInfo();
// two.getAccountInfo();

//====================================TASK 2;

// function StringBuilder(string = "") {
//   this.value = string;
// }
// StringBuilder.prototype.showValue = function() {
//   console.log(this.value);
// };
// StringBuilder.prototype.append = function(str) {
//   return (this.value += str);
// };
// StringBuilder.prototype.prepend = function(str) {
//   return (this.value = str + this.value);
// };
// StringBuilder.prototype.pad = function(str) {
//   return (this.value = str + this.value + str);
// };
// const myString = new StringBuilder(".");

// myString.append("^");
// myString.showValue(); // '.^'

// myString.prepend("^");
// myString.showValue(); // '^.^'

// myString.pad("=");
// myString.showValue(); // '=^.^='

//===============================TASK 3;
/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//     constructor(maxSpeed) {
//       /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.

//           - maxSpeed - для хранения максимальной скорости

//           - running - для отслеживания заведен ли автомобиль,
//             возможные значения true или false. Изначально false.

//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }

//     turnOn() {
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }

//     turnOff() {
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }

//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }

//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }

//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
//   }

//==================================TASK 4;
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

//==================================TASK 5;
/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

// class Car {
//     constructor(maxSpeed, value) {
//       // ... код
//       this._value = value;
//     }
//     // ... код
//   }

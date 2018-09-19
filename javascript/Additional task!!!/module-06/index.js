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


// class Car {
//   constructor(maxSpeed) {

//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;

//   }
//   turnOn() {
//     return this.running = true;
//   }
//   turnOff() {
//     return this.running = false;
//   }
//   accelerate(spd) {
//     if (this.maxSpeed > spd) {
//       return this.speed = spd;
//     }
//   }
//   decelerate(spd) {
//     if (this.maxSpeed > spd && spd > 0) {
//       return this.speed = spd;
//     }
//   }
//   drive(hours) {
//     if (this.running) {
//      return this.distance = hours * this.speed;
//     };
//   }
// }

// const lamborgini = new Car(460);
// console.log(lamborgini);
// lamborgini.turnOn();
// lamborgini.accelerate(89)
// lamborgini.decelerate(30);
// lamborgini.drive(25)

//==================================TASK 4;

// class Car {
//   constructor(maxSpeed) {

//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;

//   }
//   static getSpecs(car) {
//     console.log(`maxSpeed : ${car.maxSpeed}, running: ${car.running}, distance: ${car.distance} `);
//   }
//   turnOn() {
//     return this.running = true;
//   }
//   turnOff() {
//     return this.running = false;
//   }
//   accelerate(spd) {
//     if (this.maxSpeed > spd) {
//       return this.speed = spd;
//     }
//   }
//   decelerate(spd) {
//     if (this.maxSpeed > spd && spd > 0) {
//       return this.speed = spd;
//     }
//   }
//   drive(hours) {
//     if (this.running) {
//       return this.distance = hours * this.speed;
//     };
//   }

// }
// const someCar = new Car(100);
// someCar.turnOn();
// someCar.drive(2);

// Car.getSpecs(someCar);  
// console.log(someCar);

//==================================TASK 5;

// class Car {
//   constructor(maxSpeed, value) {
//     this.maxSpeed = maxSpeed;
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   set value(value) {
//     this._value = value;
//   }

// }
// const myCar = new Car(50, 2000);

// console.log(myCar.value); // 2000
// console.log(myCar.value = 4000);
// console.log(myCar.value); // 4000

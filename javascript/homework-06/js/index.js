"use strict";

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }
  get toppings() {
    return this._toppings;
  }
}
Hamburger.prototype.addTopping = function(topping) {
  if (!this._toppings.includes(topping)) {
    this._toppings.push(topping);
  }
};
Hamburger.prototype.removeTopping = function(topping) {
  if (this._toppings.includes(topping)) {
    let index = this._toppings.indexOf(topping);
    this._toppings.splice(index, 1);
  }
};

const ham = new Hamburger("BIG", 66);
console.log(ham);
ham.addTopping("coca-cola");
console.log(ham.toppings);
// console.log(ham.toppings);
// ham.removeTopping("coca-cola");
// console.log(ham.toppings);

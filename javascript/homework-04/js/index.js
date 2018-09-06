"use strict";

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

function Cashier({ name, productDatabase }) {
  this.name = name;
  this.productDatabase = productDatabase;
  this.customerMoney = 0;
  this.totalPrice = 0;
  this.surrenderResult = 0;
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };
  this.countTotalPrice = function(order) {
    for (const key in order) {
      if (productDatabase.hasOwnProperty(key))
      this.totalPrice += productDatabase[key] * order[key];
    }
    return this.totalPrice;
  };
  this.countChange = function() {
    if (this.customerMoney >= this.totalPrice) {
      this.surrenderResult = this.customerMoney - this.totalPrice;
    } else if (this.customerMoney < this.totalPrice) {
      this.surrenderResult = null;
    }
    return this.surrenderResult;
  };
  this.onSuccess = function(change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };
  this.onError = function() {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };
  this.reset = function() {
    this.customerMoney = 0;
  };
}

const mango = new Cashier({ name: "Mango", productDatabase: products });

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

console.log(mango.name);
console.log(mango.productDatabase);
console.log(mango.customerMoney);

const totalPrice = mango.countTotalPrice({
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
});

console.log(totalPrice);

mango.getCustomerMoney(300);

console.log(mango.customerMoney);

const change = mango.countChange();

console.log(change);

if (change !== null) {
  mango.onSuccess(change);
} else {
  mango.onError();
}

mango.reset();

console.log(mango.customerMoney);

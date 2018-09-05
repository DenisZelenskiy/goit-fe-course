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

  this.getCustomerMoney = function(value = 0) {
    this.customerMoney = value;
  };
  this.countTotalPrice = function(order) {
    orderKeys = Object.keys(order);
  };
}

const vasya = new Cashier({ name: "Chuck", productDatabase: products });


vasya.countTotalPrice({
  apples: 10,
  chicken: 15,
  cheese: 20
});

// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function Order() {
  this.items = {};
  this.currentId = 0;
}

Order.prototype.getId = function() {
  this.currentId++;
  return this.currentId;
};
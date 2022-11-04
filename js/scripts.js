// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

function Order() {
  this.item = {};
  this.currentId = 0;
}
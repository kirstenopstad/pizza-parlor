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

Order.prototype.addItem = function(item) {
  // Assisgn unique ID to item
  item.id = this.getId();
  // Use item.id as key for value item 
  this.items[item.id] = item;
}
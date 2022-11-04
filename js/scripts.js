// Business Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getPrice = function() {
  let price = 0;
  if (this.size) {
    switch (this.size) {
      case ("small"):
        price = 8;
        break;
      case ("medium"):
        price = 10;
        break;
      case ("large"):
        price = 12;
        break;
      case ("extra-large"):
        price = 14
        break;
      default:
        return 0;
    }
  } else {
    return 0;
  }
  const toppingsCount = this.toppings.length;
  const pricePerTopping = 1;
  price += (toppingsCount * pricePerTopping);

  return price;
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

// User Interface Logic

function handleAddToOrder(order) {
  // If required element of item is missing (like size), display error message
  const pizzaSize = document.getElementById("pizza-size").value;
  let pizzaToppings = document.getElementByName("topping").value;
  // Parse toppings
  pizzaToppings = pizzaToppings.split("&");
  const myPizza = new Pizza (pizzaToppings, pizzaSize);
  order.addItem(myPizza);
  // Else display [View Order] Button
  return order
}

window.addEventListener("load", function(){
  // Declare global myOrder as global Object
  const order = new Order();
  // When customer clicks "Add to Order"
  const addToOrder = document.getElementById("add-to-order");
  addToOrder.addEventListener("click", function() {
    handleAddToOrder(order);
    
  })

  // When customer clicks "View Order"
    // Hide Menu 
    // Show Order Details
    // Show [Back to Menu] button
});

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

  this.price = price;
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
let order = new Order();

function handleAddToOrder(order) {
  // TODO: If required element of item is missing (like size), display error message
  // TODO: Else display [View Order] Button
  const pizzaSize = document.getElementById("pizza-size").value;
  let pizzaToppings = document.querySelectorAll('input[name=topping]:checked');
  // For each checked topping element, replace element with element's value
  pizzaToppings = Array.from(pizzaToppings);
  pizzaToppings.forEach(function(element,index) {
    pizzaToppings[index] = element.value;
  });
  const myPizza = new Pizza (pizzaToppings, pizzaSize);
  myPizza.getPrice();
  order.addItem(myPizza);
  // Display View Order button
  const viewOrderButton = document.getElementById("view-order");
  viewOrderButton.setAttribute("class", "btn btn-secondary")
}

function handleViewOrder(order) {
    // Hide Menu 
    document.getElementById("food-menu").setAttribute("class", "hidden");
    console.log("View Order Button works")
    // Show Order Details
    const orderDetailsDiv = document.createElement("div");
    orderDetailsDiv.setAttribute("id", "order-details");
    const orderList = document.createElement("ul");
    const arrayOfItems = Array.from(order.items);
    arrayOfItems.forEach(function(pizza) {
      const li = document.createElement("li");
      li.innerText = pizza.size + " " + pizza.toppings.length + "-topping pizza."
      const priceSpan = document.createElement("span");
      priceSpan.setAttribute("class", "item-price");
      priceSpan.innerText = "$" + pizza.price + ".";
      li.append(priceSpan);
      orderList.append(li);
    });
    orderDetailsDiv.append(orderList);
    document.getElementById("order-form").append(orderDetailsDiv);
    // Show [Back to Menu] button
}

window.addEventListener("load", function(){
  // When customer clicks "Add to Order"
  const addToOrder = document.getElementById("add-to-order");
  addToOrder.addEventListener("click", function() {
    handleAddToOrder(order);
  });
  // When customer clicks "View Order"
  const viewOrder = document.getElementById("view-order");
  viewOrder.addEventListener("click", function(){
    handleViewOrder(order);
  });
})

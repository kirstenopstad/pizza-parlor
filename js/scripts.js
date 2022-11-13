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

function handleAddToOrder(order) {
  // Remove error msg
  if (document.getElementById("error-msg")) {
    document.getElementById("error-msg").remove();
  }
  const pizzaSize = document.getElementById("pizza-size").value;
  let pizzaToppings = document.querySelectorAll('input[name=topping]:checked');
  // For each checked topping element, replace element with element's value
  pizzaToppings = Array.from(pizzaToppings);
  pizzaToppings.forEach(function(element,index) {
    pizzaToppings[index] = element.value;
  });
  const myPizza = new Pizza (pizzaToppings, pizzaSize);
  const isValidSize = myPizza.getPrice();
  // TODO: If required element of item is missing (like size), display error message
  if (isValidSize === 0) {
    // Display error message
    const errorMsg = document.createElement("div");
    errorMsg.setAttribute("id", "error-msg")
    errorMsg.innerText = "Please enter size!";
    document.getElementById("pizza-form").prepend(errorMsg);
  } else {
  // TODO: Else display [View Order] Button
  order.addItem(myPizza);
  // Display View Order button
  const viewOrderButton = document.getElementById("view-order");
  viewOrderButton.setAttribute("class", "btn btn-secondary")
  // Reset item
  document.getElementById("pizza-form").reset();
  }
  return order;
}

function handleViewOrder(order) {
    // TODO: pass in order
    // Hide Menu 
    document.getElementById("food-menu").setAttribute("class", "hidden");
    // Show Order Details
    const orderDetailsDiv = document.createElement("div");
    orderDetailsDiv.setAttribute("id", "order-details");
    const h4 = document.createElement("h4");
    h4.innerText = "Order Details"
    orderDetailsDiv.append(h4);
    const ul = document.createElement("ul");
    const arrayOfItems = Object.keys(order.items);
    for (let i = 1; i <= arrayOfItems.length; i++) {
      const li = document.createElement("li");
      li.innerText = order.items[i].size + " " + order.items[i].toppings.length + "-topping pizza.";
      const priceSpan = document.createElement("span");
      priceSpan.setAttribute("class", "item-price");
      priceSpan.innerText = "$" + order.items[i].price;
      li.append(priceSpan);
      ul.append(li);
    };
    orderDetailsDiv.append(ul);
    document.getElementById("order-form").append(orderDetailsDiv);
    // Show [Back to Menu] button
    const backToMenu = document.createElement("button");
    backToMenu.setAttribute("class", "btn btn-secondary");
    backToMenu.innerText = "Back to Menu";
    orderDetailsDiv.append(backToMenu);
    // Listen for [Back to Menu] click
    backToMenu.addEventListener("click", function() {
      handleBacktoMenu(orderDetailsDiv);
    });
}

function handleBacktoMenu(orderDetailsDiv) {
  // Delete Order Details div
  orderDetailsDiv.remove();
  // Unhide food menu  
  document.getElementById("food-menu").setAttribute("class", null);

}

window.addEventListener("load", function(){
  // Initialize Order object
  let order = new Order();

  // When customer clicks "Add to Order"
  const addToOrder = document.getElementById("add-to-order");
  addToOrder.addEventListener("click", function() {
    handleAddToOrder(order);
  });
  // When customer clicks "View Order"
  const viewOrder = document.getElementById("view-order");
  viewOrder.addEventListener("click", function() {
    handleViewOrder(order);
  })
})

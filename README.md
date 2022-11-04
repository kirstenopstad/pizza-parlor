# Pizza Parlor

#### By Kirsten Opstad

#### A simple web application for taking an order

## Technologies Used

* HTML 
* CSS 
* Bootstrap
* JavaScript

## Description

A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

### Objectives (MVP)

* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen.
Additionally:
* Constructors and prototypes are used successfully.
* Application works as expected.
* Tests are included for each business logic behavior and code is committed after each test passes.
* Project is in a polished, portfolio-quality state.
* The prompt’s required functionality and baseline project requirements are in place by the deadline.
<!-- [x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images) -->

[x] [Link to operational site](http://www.kirstenopstad.github.com/<REPOSITORY NAME>)

### Goals
1. Meet project MVP requirements.
2. Style your site with CSS and images.
3. Stretch: Allow users to order more than one pizza with different toppings.
4. Stretch: Display the list of pizzas ordered as links that can be clicked for details.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## Tests
```
Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Order()

Test: "It should return an empty Order object with two properties for item and currentId"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
const myOrder = new Order( myPizza, 1)
Expected Output: Order { items: { toppings: ["anchovies", "pineapple"], size: "medium" ), currentId: 1}

Describe: Order.prototype.getId()

Test: "It should return a unique id by incrementing current id by one"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
const myOrder = new Order( myPizza, 1)
myOrder.getId();
Expected Output: 2

Describe: Order.protoype.addItem()

Test: "It should return an Order object that contains a Pizza object nested within the items property"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
const myOrder = new Order( myPizza, 1)
myOrder.addItem(myPizza);
myOrder;
Expected Output: Order { items: { id: 1; toppings: ["anchovies", "pineapple"], size: "medium" ), currentId: 2}

```

## License

MIT License

Copyright (c) 2022 Kirsten Opstad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
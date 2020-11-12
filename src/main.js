import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


// Business Logic

function Order() {
  this.items = [];
  this.cost;
  this.id = 0;
}

Order.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};

Order.prototype.calculateOrderCost = function() {
  let costs, total;
  costs = [];
  for (let pizzaObj of this.items) {
    costs.push(pizzaObj.cost);
  }
  total = costs.reduce((a,b) => a + b, 0);
  this.cost = total;
};

Order.prototype.addOrderItem = function(pizza) {
  pizza.id = this.assignId();
  pizza.calculatePizzaCost();
  pizza.addDescription();
  this.items.push(pizza);
  this.calculateOrderCost();
};

Order.prototype.removeOrderItem = function(id) {
  this.items = this.items.filter(pizzaObj => pizzaObj.id != id);
  this.calculateOrderCost();
};



function Pizza(base, toppings, extras, size) {
  this.base = base;
  this.toppings = toppings;
  this.extras = extras;
  this.size = size;
  this.cost;
  this.description;
}

Pizza.prototype.calculatePizzaCost = function() {
  switch (this.size) {
  case "Big-wimpin' style":
    this.cost = 10;
    break;
  case "Paul Bunyan mode":
    this.cost = 13;
    break;
  case "Cosmic Sagan scale":
    this.cost = 15;
    break;
  default: alert("please select size");
  }
  if (this.toppings.length > 0 || this.extras.length > 0) {
    this.cost += ((this.toppings.length * 1) + (this.extras.length * 2));
  }
};

Pizza.prototype.addDescription = function() {
  let baseSplit = this.base.split(' ');
  this.description = `<p>(1) ${baseSplit[0]}, ${this.toppings.length}-topping(s), ${this.extras.length}-add-on(s) -- ${this.size}<br>Total: $${this.cost}</p>`;
};





// UI Logic

let order = new Order();

function setUpEventListeners() {
  $("#items").on("click", ".editBtn", function() {

  });
  $("#items").on("click", ".removeBtn", function() {
    order.removeOrderItem(this.id);
    $("div").remove(`.${this.id}`);
    displayOrderSummary(order);
  });
}

function displayOrderItem(item) {
  $("#items").append(
    `<div class="${order.id}"><hr><p><strong>Item:</strong><br>${item.description}</p>
    <button type="button" id="${order.id}" class="btn btn-custom removeBtn">Remove</button></div>`
    // <button type="button" id="edit" class="btn btn-custom editBtn">Edit</button>
  );
}

function displayOrderSummary(order) {
  $("#order-total").html(`<p><strong>Order Total:</strong> $${order.cost}</p>`);
}

$(document).ready(function() {
  setUpEventListeners();

  // form submission
  $("#form").submit(function(e) {
    e.preventDefault();

    // jQuery selector variables
    let base, toppings, extras, size;
    base = $("#select-base");
    toppings = $("input:checkbox[name=toppings]:checked");
    extras = $("input:checkbox[name=extras]:checked");
    size = $("#select-size");

    // collect, organize, and display user input
    let baseInput, toppingsInput, extrasInput, sizeInput;
    baseInput = base.val();
    toppingsInput = [];
    toppings.each(function() {
      let topping = $(this).val();
      toppingsInput.push(topping);
    });
    extrasInput = [];
    extras.each(function() {
      let extra = $(this).val();
      extrasInput.push(extra);
    });    
    sizeInput = size.val();

    let pizza = new Pizza(baseInput, toppingsInput, extrasInput, sizeInput);
    order.addOrderItem(pizza);
    displayOrderItem(pizza);
    displayOrderSummary(order);
    console.log(order);
  });
});
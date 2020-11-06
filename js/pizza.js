// Business Logic

function Order() {
  this.items = [];
  this.cost = 0;
};

function Pizza(base, toppings, extras, size) {
  this.base = base;
  this.toppings = toppings;
  this.extras = extras;
  this.size = size;
  this.cost = 0;
};

Pizza.prototype.calculatePizzaCost = function() {
  switch (this.size) {
    case "small":
      this.cost = 10;
      break;
    case "medium":
      this.cost = 13;
      break;
    case "large":
      this.cost = 15;
      break;
    default: alert("please select size")
  }
  if (this.toppings.length > 0) {this.cost += (this.toppings.length * 1)};
  if (this.extras.length > 0) {this.cost += (this.extras.length * 2)}
};


// UI Logic

$(document).ready(function() {
  // generate new user order
  let order = new Order();

  // form submission
  $("#form").submit(function(e) {
    // console.log("submission pass");
    e.preventDefault();

    // jQuery selector variables
    let base, toppings, extras, size;
    base = $("#select-base");
    toppings = $("input:checkbox[name=toppings]:checked");
    extras = $("input:checkbox[name=extras]:checked");
    size = $("#select-size");

    // collect user input
    let baseInputted, toppingsInputted, extrasInputted, sizeInputted;
    baseInputted = base.val()
    toppingsInputted = [];
    toppings.each(function() {
      let topping = $(this).val();
      toppingsInputted.push(topping);
    });
    extrasInputted = [];
    extras.each(function() {
      let extra = $(this).val();
      extrasInputted.push(extra);
    });    
    sizeInputted = size.val();

    // organize user input
    let userPizza = new Pizza(baseInputted, toppingsInputted, extrasInputted, sizeInputted);
    userPizza.calculatePizzaCost();
    order.items.push(userPizza);
    console.log(userPizza);
    console.log(order);
  });
});
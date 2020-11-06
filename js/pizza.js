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
};

// Order.prototype.calculateCost() = function() {
  
// };


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
    extras = $("#select-extras");
    size = $("#select-size");

    // collect user input
    let baseInputted, toppingsInputted, extrasInputted, sizeInputted;
    baseInputted = base.val()
    toppingsInputted = [];
    extrasInputted = extras.val();
    sizeInputted = size.val();
    toppings.each(function() {
      let topping = $(this).val();
      toppingsInputted.push(topping);
    });

    // organize user input
    let userPizza = new Pizza(baseInputted, toppingsInputted, extrasInputted, sizeInputted);
    order.items.push(userPizza);
    console.log(userPizza);
    console.log(order);
  });
});
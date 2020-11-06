// Business Logic

function Order() {
  let items = [];
  let cost = 0;
};

function Pizza(base, toppings, extras, size) {
  this.base = base;
  this.toppings = toppings;
  this.extras = extras;
  this.size = size;
};


// UI Logic

$(document).ready(function() {

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
  
    // user input
    let baseInputted = base.val()
    let toppingsInputted = [];
    let extrasInputted = extras.val();
    let sizeInputted = size.val();
    toppings.each(function() {
      let topping = $(this).val();
      toppingsInputted.push(topping);
    });
    let userPizza = new Pizza(baseInputted, toppingsInputted, extrasInputted, sizeInputted);
    console.log(userPizza);
  });
});
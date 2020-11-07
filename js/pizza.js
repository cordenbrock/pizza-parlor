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
  // this.id = uuid();
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
  if (this.toppings.length > 0 || this.extras.length > 0) {
    this.cost += ((this.toppings.length * 1) + (this.extras.length * 2));
  };
};

Order.prototype.calculateOrderCost = function() {
  let costs, total;
  costs = [];
  for (let pizzaObj of this.items) {
    costs.push(pizzaObj.cost);
  };
  total = costs.reduce((a,b) => a + b)
  this.cost = total;
};

Order.prototype.removeItem = function() {

}


// UI Logic

$(document).ready(function() {
  // generate new user order
  let order = new Order();

  // form submission
  $("#form").submit(function(e) {
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

    // organize and display user input
    let userPizza = new Pizza(baseInputted, toppingsInputted, extrasInputted, sizeInputted);
    userPizza.calculatePizzaCost();
    userPizza
    $("#pizzas").append(`<p><strong>Item:</strong><br>${userPizza.base} <br> ${userPizza.toppings.join(', ')} <br> ${userPizza.extras.join(', ')} <br> ${userPizza.size} <br> $${userPizza.cost}</p>`);
    order.items.push(userPizza);
    order.calculateOrderCost();
    $("#order-total").html(`<p>Order Total: $${order.cost}</p>`);
  });
});
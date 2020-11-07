
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
    case "Big-wimpin' style":
      this.cost = 10;
      break;
    case "Paul Bunyan mode":
      this.cost = 13;
      break;
    case "Cosmic Sagan scale":
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

// Order.prototype.removeItem = function() {

// }


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

    // organize and display user input
    let userPizza = new Pizza(baseInput, toppingsInput, extrasInput, sizeInput);
    userPizza.calculatePizzaCost();
    $("#pizzas").append(
      `<hr><p><strong>Item:</strong><br>Base: ${userPizza.base} <br>Toppings: ${userPizza.toppings.join(', ')} <br>Extras: ${userPizza.extras.join(', ')} <br>Size: ${userPizza.size} <br> Total: $${userPizza.cost}</p>
      <button type="button" "id="edit" class="btn btn-custom">Edit</button>
      <button type="button" id="remove" class="btn btn-custom">Remove</button>`
      );
    order.items.push(userPizza);
    order.calculateOrderCost();
    $("#order-total").html(`<p>Order Total: $${order.cost}</p>`);
  });
});
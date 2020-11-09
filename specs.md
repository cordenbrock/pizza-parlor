Business Logic

Func: Order()
/// describe: constructs new order object
--> test: let order = new Order(); console.log(order);
--> expect: {items: [], cost: 0}

Func: Pizza()
/// describe: constructs new pizza object
--> test: let pizzaObj = new Pizza(cheese, pepperoni, anchovies, medium); console.log(pizzaObj);
--> expect: {base: cheese, toppings: pepperoni, extras: anchovies, size: medium}

Func: Pizza.prototype.calculatePizzaCost()
/// describe: check size of pizza, return flat cost
--> test: let pizzaSize = "small"; console.log(Pizza.calculatePizzaCost(pizzaSize));
--> expect: 10
/// describe: calculate single-pizza cost based on lengths of toppings-array and extras-array from Pizza object props
--> test: let pizza.toppings.length = 2; let pizza.extras.length = 1; console.log(Pizza.calculatePizzaCost(pizzaSize));
--> expect: 14

Func: Order.prototype.calculateOrderCost()
/// describe: iterate through each pizza-object element in items array from Order object, thus collecting each pizza-object cost-prop in new costs array
--> test: let Order = {[{cost: 10}, {cost: 15}], 0}; Order.calculateOrderCost(); console.log(costs);
--> expect: [10,15]
/// describe: total values from new costs array, assign sum-value to cost-prop of Order object
--> test: let Order = {[{cost: 10}, {cost: 15}], 0}; console.log(Order.calculateOrderCost()); 
--> expect:25




UI Logic


submit()
/// describe: submits form, collects user input in object variable
--> test: let userPizza = new Pizza(base, toppings, extras, size);
--> expect userPizza = {base: base.val(), toppings: toppings.val(), extras: extras.val(), size: size.val()}



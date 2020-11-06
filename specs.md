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
--> test: let pizzaSize = "small"; console.log(calculatePizzaCost(pizzaSize));
--> expect: 10
/// describe: calculate single-pizza cost based on lengths of toppings-array and extras-array from Pizza object props
--> test: let pizza.toppings.length = 2; let let pizza.extras.length = 1; console.log(calculatePizzaCost(pizzaSize));
--> expect: 14

Func: Order.prototype.calculateOrderCost()
/// describe: calculate order cost based on each pizza cost
--> test: 
--> expect:




<!-- cancelOrder()
--removes order from UI
--removes order from Order object

editOrder()
--allows user to select/deselect toppings 
-->


UI Logic

<!-- 
attachEventListeners();
-cancel btn
-edit btn
 -->

submit()
/// describe: submits form, collects user input in object variable
--> test: let userPizza = new Pizza(base, toppings, extras, size);
--> expect userPizza = {base: base.val(), toppings: toppings.val(), extras: extras.val(), size: size.val()}
/// describe: clears previous form input fields
-->



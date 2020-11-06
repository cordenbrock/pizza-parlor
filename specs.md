pizzaContructor()
/// describe: constructs pizza object
--> test: let pizzaObj = new Pizza(cheese, pepperoni, anchovies, medium)
--> expect pizzaobj = {base: cheese, toppings: pepperoni, extras: anchovies, size: medium}




addPizzaToOrder();
--collect and store pizza obj props
--add pizza obj to order array

cancelOrder();
--starts order over


Pizza.prototype.calculateCost();

cancelOrder()
--removes order from UI and local memory

editOrder()
--allows user to select/deselect toppings


UI

attachEventListeners();
-submit btn
-cancel btn
-edit btn

submit()
/// describe: submits form, collects user input in object variable
--> test: let userPizza = new Pizza(base, toppings, extras, size);
--> expect userPizza = {base: base.val(), toppings: toppings.val(), extras: extras.val(), size: size.val()}
/// describe: clears previous form input fields
-->



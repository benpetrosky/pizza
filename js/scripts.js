//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.topping = toppings;
}
Pizza.prototype.pizzaOrder = function(){
  return "Your " + this.size + " pizza with " + this.toppings + " will be ready in 20 minutes.";
}





//ui logic

$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var sizeInput = $("input:radio[name=size]:checked").val();
    console.log(sizeInput)
    var toppingsInput = [$("input:checkbox[name=topping]:checked").val()];
    console.log(toppingsInput)

    if (!sizeInput || !toppingsInput)
    {
      alert("We need to know the size you want.")
    }
    else
    {
    var newPizza = new Pizza(sizeInput, toppingsInput);

    $("#order-ready").prepend("<li><span" + newPizza.pizzaOrder() + "</span></li>");
    console.log(newPizza.pizzaOrder());
    }
  });
});

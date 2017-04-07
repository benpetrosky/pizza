//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.topping = toppings;
}
Pizza.prototype.pizzaOrder = function(){
  return "Your " + this.size + " pizza with " + this.topping + " will be ready in 20 minutes.";
}





//ui logic

$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var sizeInput = $("input:radio[name=size]:checked").val();
    var toppingsArray = []
      $("input:checkbox[name=topping]:checked").each(function(){
         toppingsArray.push($(this).val());

        });

      console.log(toppingsArray)


      if (!sizeInput)
      {
        alert("We need to know the size you want.")
      }
      else
      {
      var newPizza = new Pizza(sizeInput, toppingsArray);

      $("#order-ready").prepend("<li><span>" + newPizza.pizzaOrder() + "</span></li>");
      console.log(newPizza.pizzaOrder());

      }
    });
  });

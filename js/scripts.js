//business logic
function Pizza(size, toppings) {
  this.size = size;
  this.topping = toppings;
}
Pizza.prototype.pizzaOrder = function(){
  return "Your " + this.size + " pizza with " + this.topping + " will be ready in 20 minutes.";
}

Pizza.prototype.cost = function(){
  var total= 0;

  if (this.size === "small")
  {
    total += 5;
  }
  else if (this.size === "medium")
  {
    total += 7;
  }
  else if (this.size === "large")
  {
    total += 10;
  }
  return ("Your total cost comes to $" + total + ".")
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
    var toppingsArrayLength = toppingsArray.length;
    console.log(toppingsArrayLength)

      if (!sizeInput)
      {
        alert("We need to know the size you want.")
      }
      else
      {
      var newPizza = new Pizza(sizeInput, toppingsArray);

      $("#order-ready").text(newPizza.pizzaOrder() + "  " + newPizza.cost());

      // $("input:radio[name=size]:checked").val();
      // $("input:checkbox[name=topping]:checked").val();

      }
    });
  });

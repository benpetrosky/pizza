//business logic
function Pizza(size, toppings, numberToppings) {
  this.size = size;
  this.topping = toppings;
  this.numberTopping = numberToppings;
}
Pizza.prototype.pizzaOrder = function(){
  return "Your " + this.size + " pizza with " + this.topping + " will be ready in 20 minutes.";
}

Pizza.prototype.cost = function(){
  var total= 0;

  if (this.size === "small" && this.numberTopping<4)
  {
    total += 5;
  }
  else if (this.size === "small" && this.numberTopping>=4)
  {
    total += 6;
  }
  else if (this.size === "medium" && this.numberTopping<4)
  {
    total += 7;
  }
  else if (this.size === "medium" && this.numberTopping>=4)
  {
    total += 8;
  }
  else if (this.size === "large" && this.numberTopping<4)
  {
    total += 9;
  }
  else if (this.size === "large" && this.numberTopping>=4)
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
      var newPizza = new Pizza(sizeInput, toppingsArray, toppingsArrayLength);

      $("#order-ready").text(newPizza.pizzaOrder() + "  " + newPizza.cost());

      // $("input:radio[name=size]:checked").val();
      // $("input:checkbox[name=topping]:checked").val();

      }
    });
  });

//business logic
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}
Pizza.prototype.pizzaOrder = function(){
  return "Your " + this.size + " pizza with " + this.topping + " will be ready in 20 minutes.";
}





//ui logic

$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var sizeInput = $("input:radio[name=size]:checked").val();
    console.log(sizeInput)
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsInput = $(this).val();

      console.log(toppingsInput)


      if (!sizeInput || !toppingsInput)
      {
        alert("We need to know the size you want.")
      }
      else
      {
      var newPizza = new Pizza(sizeInput, toppingsInput);

      $("#order-ready").prepend("<li><span>" + newPizza.pizzaOrder() + "</span></li>");
      console.log(newPizza.pizzaOrder());
      }
    });
  });
});

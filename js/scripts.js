//business logic

function Pizza(size, toppings, crusts, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.crusts = crusts;
  this.delivery = delivery;
}

Pizza.prototype.price = function() {
  if (this.size === 'small') {var price = 799;
  } else if (this.size === 'medium') {var price = 999;
  } else {var price = 1199;}
  price += this.size.length;
  return price;
}

  totalCost = 0;

// user interface logic
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var size = "";
    $("input:radio[name=size]:checked").each(function(){
      size = $(this).val();
    });
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var aTopping = $(this).val();
      toppings.push(aTopping);
    });
     var crusts = [];
     $("input:checkbox[name=crust]:checked").each(function(){
    var aCrust = $(this).val();
     crusts.push(aCrust);
    });
    if (toppings.length === 0 && crusts.length === 0 ) {
      alert ("Please choose at least one topping!");
    }  else {
      var newPizza = new Pizza(size, toppings,);
      totalCost += newPizza.price();
      var pizzaHtml = "<li><span class='pizza'>" + size
      newPizza.toppings.forEach(function(topping,) {pizzaHtml += (" "+topping)});
      $("ol#pizzas").append(pizzaHtml + " pizza - Ksh "+newPizza.price()+"</span></li>");
      $("h4#totalCost").text("Total Cost:Ksh " + parseInt(totalCost))

      $('input[type=checkbox]').each(function() {
        if (this.value === 'cheese') {
          this.checked = true;
        } else {
          this.checked = false;
        };
      });
      $('input[type=radio]').each(function() {
        if (this.value === 'small') {
          this.checked = true;
        } else {
          this.checked = false;
        };
        $("input:checkbox[name=yes]").each( function(){
         if (this.value ==='yes') {
           this.checked = true;
           if (this.checked = true) {
            alert ("delivery charges of Ksh 100 apply."); 
            prompt ("Please enter your location here!");
            alert ("Your order will be  delivered to your  location.");
            callback ();
          };  
         };
        });
        
      });
    };
  });
});

// Declaring variables and array to store user inputs
$(document).ready(function(){
    var result = 0;
    var operator = null;
    var numArray = ["",""];
    var numIndex = 0;
  
  
  // Number click functions
  $('.number').on("click", function() {
    numArray[numIndex] += $(this).attr("value");
    if (numIndex === 0) {
        $("#first-number").text(numArray[numIndex]);
    }
    else {
        $("#second-number").text(numArray[numIndex]); 
    }
                              
  });
  
    
  // Operator click functions
  $('.operator').on("click", function() {
    //here
    operator = this.value;
    //changes the number we are working on
    numIndex = 1;
    
    var myElement = $('#operator');
    
    switch(operator) {
      case "plus":
        myElement.text("+");
        break;
      case "minus":
        myElement.text("-");
        break;
      case "times":
        myElement.text("*");
        break;
      case "divide":
        myElement.text("/");
        break;
      case "power":
        myElement.text("^");
        break;
      default:
        break;
    
    }
  });
  
  // Equal button functions
  $("#button-equal").on("click", function () {
    // Transforms our user inputs into integers
    var num1 = parseInt(numArray[0]);
    var num2 = parseInt(numArray[1]);
    
    // Does the math!
    switch(operator) {
      case "plus":
        result = num1 + num2;
        break;
      case "minus":
        result = num1 - num2;
        break;
      case "times":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      case "power":
        result = num1 ** num2;
        break;
      default:
        break;
    }
        
      $('#result').text(result);
    });

    // Clear button
    $('.clear').on('click', function() {
        result = 0;
        operator = null;
        numArray = ["",""];
        numIndex = 0;
        $('#first-number').text('');
        $('#second-number').text('');
        $('#operator').text('');
        $('#result').text('');
  });
   
});
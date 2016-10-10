var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var operator = $('#operatorSelector').val();
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.calculate(num1, num2, operator);
    $('#solution').text(result);
  });
});

$(document).ready(function() {
  $('#calculator-form').hide();
  $('#email').submit(function(event) {
    event.preventDefault();
    var email = $('#address').val();
    $('#email').hide();
    $('#calculator-form').show();
    $('#email-display').text('Thank you! The email ' + email + ' has been saved.');

  });
});

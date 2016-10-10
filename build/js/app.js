(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/calculator.js":2}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.calculate = function(num1, num2, operator){
  var result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-'){
    result = num1 - num2;
  }else if (operator === '*'){
    result = num1 * num2;
  }else {
    result = num1 / num2;
  }
  return result;
  alert("result");
  console.log(result);
};

exports.calculatorModule = Calculator;

},{}]},{},[1]);

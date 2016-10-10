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

// exports.calculatorModule = Calculator;

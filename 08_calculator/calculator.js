const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let result = 0;
  for (let num in array) {
    result = result + array[num];
  }
	return result;
};

const multiply = function() {
  let multipliers = Array.from(arguments);

  let result = multipliers[0]
  for (let index = 1; index < multipliers.length; index++) {
    result = result * multipliers[index];
  }
  return result;
};

const power = function(base, power) {
  let result = base;

  for (let index = 1; index < power; index++) {
    result = result * base;
  }
	return result;
};

const factorial = function(fac) {
	let result = 1;
  for (let index = fac; index > 0; index--) {
    result = result * index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

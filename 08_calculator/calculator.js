const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
};

const multiply = function(numbers) {
  let total = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
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

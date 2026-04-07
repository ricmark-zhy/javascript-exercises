const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const result = arr.reduce((sum, item) => sum + item, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((product, item) => product * item);
  return result;
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--){
    result *= i;
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

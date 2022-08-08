const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((sum, position) => {
    return sum + position;
  }, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((result, position) => result * position);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (number) {
  let result = 1;
  for (let i = 1; i <= number; i++)
    result *= i;
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

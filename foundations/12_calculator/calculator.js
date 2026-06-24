const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numArray) {
	return numArray.reduce((total, num) => {
    return total + num;
  }, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((total, num) => {
    return total * num;
  }, 1)
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  fac = 1;
	for (let i = 2; i <= num; i++){
    fac = fac * i;
  }
  return fac;
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

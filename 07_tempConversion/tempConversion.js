const ftoc = function() {
  let result = (arguments[0] - 32)*5/9;
  //toFixed to set 1 decimal place then convert the String it returns to a Numebr
  return Number(result.toFixed(1)); 
};

const ctof = function() {
  let result = arguments[0]*9/5+32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

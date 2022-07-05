const ftoc = function(f) {
  const output = (f - 32) * 5/9;
  return Math.round((output + Number.EPSILON) * 10) / 10;
};

const ctof = function(c) {
  const output = c * 9 / 5 + 32;
  return Math.round((output + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

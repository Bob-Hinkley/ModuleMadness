
var currency = function (number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

module.exports = currency;

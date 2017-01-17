var randomNumber = require('./module1');
var currency = require('./module2');


exports.randomNumber = function() {
  return currency(randomNumber(100, 1000000));
}

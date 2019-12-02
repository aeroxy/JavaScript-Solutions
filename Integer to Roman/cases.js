const expect = require('../test/expect');
const method = require('./integer-to-roman-c');

module.exports = () => {
  expect([3], ['III'], method);
  expect([4], ['IV'], method);
  expect([9], ['IX'], method);
  expect([58], ['LVIII'], method);
  expect([1994], ['MCMXCIV'], method);
}
const expect = require('../test/expect');
const method = require('./roman-to-integer-e');

module.exports = () => {
  expect(['III'], [3], method);
  expect(['IV'], [4], method);
  expect(['IX'], [9], method);
  expect(['LVIII'], [58], method);
  expect(['MCMXCIV'], [1994], method);
  expect(['DCXXI'], [621], method);
}
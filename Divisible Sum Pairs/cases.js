const expect = require('../test/expect');
const method = require('./divisible-sum-pairs');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    6,
    5,
    [1, 2, 3, 4, 5, 6]
  ], 3, testMethod);
  expect([
    6,
    3,
    [1, 3, 2, 6, 1, 2]
  ], 5, testMethod);
};
const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    9,
    [10, 20, 20, 10, 10, 30, 50, 10, 20]
  ], 3, testMethod);
};
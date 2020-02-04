const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    [1, 2, 3],
    4
  ], 2, testMethod);
  expect([
    [3, 1, 2, 1],
    4
  ], 3, testMethod);
};
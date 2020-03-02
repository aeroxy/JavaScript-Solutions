const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    [3, 10, 2, 9],
    1,
    12
  ], 5, testMethod);
  expect([
    [3, 10, 2, 9],
    1,
    7
  ], 'Bon Appetit', testMethod);
};
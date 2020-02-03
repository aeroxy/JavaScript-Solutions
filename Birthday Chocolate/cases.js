const expect = require('../test/expect');
const method = require('./birthday-chocolate');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    [1, 2, 1, 3, 2],
    3,
    2
  ], 2, testMethod);
  expect([
    [1, 1, 1, 1, 1, 1],
    3,
    2
  ], 0, testMethod);
  expect([
    [4],
    4,
    1
  ], 1, testMethod);
};
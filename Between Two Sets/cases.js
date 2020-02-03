const expect = require('../test/expect');
const method = require('./between-two-sets');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(method(...input), output);
};

module.exports = () => {
  expect([
    [2, 4],
    [16, 32, 96]
  ], 3, testMethod);
  expect([
    [2, 6],
    [24, 36]
  ], 2, testMethod);
  expect([
    [2],
    [20, 30, 12]
  ], 1, testMethod);
  expect([
    [3, 9, 6],
    [36, 72]
  ], 2, testMethod);
};
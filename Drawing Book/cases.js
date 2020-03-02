const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    6,
    2
  ], 1, testMethod);
  expect([
    5,
    4
  ], 0, testMethod);
};
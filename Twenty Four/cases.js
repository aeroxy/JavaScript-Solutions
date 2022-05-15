const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    2, 2, 2, 3
  ], true, testMethod);
  expect([
    10, 10, 10, 10
  ], false, testMethod);
  expect([
    2, 2, 2, 9
  ], true, testMethod);
};
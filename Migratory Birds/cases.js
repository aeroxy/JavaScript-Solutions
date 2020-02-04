const expect = require('../test/expect');
const method = require('./migratory-birds');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.equal(output, method(...input));
};

module.exports = () => {
  expect([
    [1, 4, 4, 4, 5, 3]
  ], 4, testMethod);
  expect([
    [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
  ], 3, testMethod);
};
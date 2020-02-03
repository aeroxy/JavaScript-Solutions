const expect = require('../test/expect');
const method = require('./breaking-the-records');
const assert = require('assert');

const testMethod = (input, output) => {
  return assert.deepEqual(output, method(...input));
};

module.exports = () => {
  expect([
    [12, 24, 10, 24]
  ], [
    1, 1
  ], testMethod);
  expect([
    [10, 5, 20, 20, 4, 5, 2, 25, 1]
  ], [
    2, 4
  ], testMethod);
  expect([
    [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
  ], [
    4, 0
  ], testMethod);
};
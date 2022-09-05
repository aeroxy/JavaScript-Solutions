const expect = require('../test/expect');
const method = require('./solution2');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  assert.equal(
    output,
    result,
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        [1,3,5,6],
        5,
      ], 2, testMethod);
    },
    () => {
      expect([
        [1,3,5,6],
        2,
      ], 1, testMethod);
    },
    () => {
      expect([
        [1,3,5,6],
        7,
      ], 4, testMethod);
    },
    () => {
      expect([
        [1,3,5,6],
        2,
      ], 1, testMethod);
    },
    () => {
      expect([
        [1,3],
        2,
      ], 1, testMethod);
    },
    () => {
      expect([
        [3,6,7,8,10],
        5,
      ], 1, testMethod);
    },
    () => {
      expect([
        [1,3],
        3,
      ], 1, testMethod);
    },
    () => {
      expect([
        [3,4,5,6,7,8],
        6,
      ], 3, testMethod);
    },
    () => {
      expect([
        [3,5,7,9,10],
        8,
      ], 3, testMethod);
    },
  ],
};
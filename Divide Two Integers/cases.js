const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  assert.equal(
    result,
    output,
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        10,
        3,
      ], 3, testMethod);
    },
    () => {
      expect([
        7,
        -3,
      ], -2, testMethod);
    },
    () => {
      expect([
        -2147483648,
        -1,
      ], 2147483647, testMethod);
    },
  ],
};
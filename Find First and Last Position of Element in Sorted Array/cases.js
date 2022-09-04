const expect = require('../test/expect');
const method = require('./solution');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  assert.deepEqual(
    output,
    result,
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        [5,7,7,8,8,10],
        8,
      ], [3,4], testMethod);
    },
    () => {
      expect([
        [5,7,7,8,8,10],
        6,
      ], [-1,-1], testMethod);
    },
    () => {
      expect([
        [],
        0,
      ], [-1,-1], testMethod);
    },
  ],
};
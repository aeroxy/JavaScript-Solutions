const expect = require('../test/expect');
const method = require('./solution');
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
        [4,5,6,7,0,1,2],
        0,
      ], 4, testMethod);
    },
    () => {
      expect([
        [4,5,6,7,0,1,2],
        3,
      ], -1, testMethod);
    },
    () => {
      expect([
        [1],
        0,
      ], -1, testMethod);
    },
  ],
};
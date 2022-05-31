const expect = require('../test/expect');
const method = require('./solution3');
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
        [2,4,9],
        22323,
      ], 22299, testMethod);
    },
    () => {
      expect([
        [2,4,9],
        24900,
      ], 24499, testMethod);
    },
    () => {
      expect([
        [2,4,9],
        22,
      ], 2, testMethod);
    },
    () => {
      expect([
        [0],
        0,
      ], null, testMethod);
    },
  ],
};
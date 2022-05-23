const expect = require('../test/expect');
const method = require('./solution2');
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
        'hello',
        'll',
      ], 2, testMethod);
    },
    () => {
      expect([
        'aaaaa',
        'bba',
      ], -1, testMethod);
    },
    () => {
      expect([
        'a',
        'a',
      ], 0, testMethod);
    },
  ],
};
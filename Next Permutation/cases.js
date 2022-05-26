const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  assert.equal(
    JSON.stringify(result),
    JSON.stringify(output),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        [1,2,3],
      ], [1,3,2], testMethod);
    },
    () => {
      expect([
        [3,2,1],
      ], [1,2,3], testMethod);
    },
    () => {
      expect([
        [1,1,5],
      ], [1,5,1], testMethod);
    },
    () => {
      expect([
        [1,3,2],
      ], [2,1,3], testMethod);
    },
  ],
};
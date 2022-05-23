const expect = require('../test/expect');
const method = require('./solution2');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  assert.equal(output[0], result);
  const jsonResult = JSON.stringify([
    result,
    ...input[0].slice(0, result),
  ]);
  assert.equal(
    JSON.stringify([
      output[0],
      ...output[1],
    ]),
    jsonResult,
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        [3,2,2,3],
        3,
      ], [
        2,
        [2,2],
      ], testMethod);
    },
    () => {
      expect([
        [0,1,2,2,3,0,4,2],
        2,
      ], [
        5,
        [0,1,3,0,4],
      ], testMethod);
    },
  ],
};
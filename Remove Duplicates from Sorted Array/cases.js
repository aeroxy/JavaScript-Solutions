const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  assert.equal(output[0], result);
  output[1].forEach((num, index) => {
    assert.equal(input[0][index], num);
  });
};

module.exports = {
  testCases: [
    () => {
      expect([
        [1,1,2],
      ], [
        2,
        [1,2],
      ], testMethod);
    },
    () => {
      expect([
        [0,0,1,1,1,2,2,3,3,4],
      ], [
        5,
        [0,1,2,3,4],
      ], testMethod);
    },
  ],
};
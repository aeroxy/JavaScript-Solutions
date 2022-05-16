const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  const result = method(...input);
  console.log(`testing input: ${input}, expected output: ${output}, actual output: ${result}`);
  return assert.equal(output, result);
};

module.exports = {
  testCases: [
    () => {
      expect([
        [-1,2,1,-4],
        1,
      ], 2, testMethod);
    },
    () => {
      expect([
        [0,0,0],
        1,
      ], 0, testMethod);
    },
  ],
};
const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  const result = method(...input);
  result.sort((a, b) => a - b);
  console.log(`testing input: ${input}, expected output: ${output}, actual output: ${result}`);
  return assert.equal(
    JSON.stringify(output),
    JSON.stringify(result),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        '23',
      ], ['ad','ae','af','bd','be','bf','cd','ce','cf'], testMethod);
    },
    () => {
      expect([
        '',
      ], [], testMethod);
    },
    () => {
      expect([
        '2',
      ], ['a','b','c'], testMethod);
    },
  ],
};
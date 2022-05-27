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
        '(()',
      ], 2, testMethod);
    },
    () => {
      expect([
        ')()())',
      ], 4, testMethod);
    },
    () => {
      expect([
        ')(())))(())())',
      ], 6, testMethod);
    },
    () => {
      expect([
        '()(()',
      ], 2, testMethod);
    },
    () => {
      expect([
        '()',
      ], 2, testMethod);
    },
    () => {
      expect([
        '))()())',
      ], 4, testMethod);
    },
  ],
};
const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  return assert.equal( 
    output,
    result,
  );
};

module.exports = {
  testCases: [
    () => {
      expect(['()'], true, testMethod);
    },
    () => {
      expect(['()[]{}'], true, testMethod);
    },
    () => {
      expect(['(]'], false, testMethod);
    },
    () => {
      expect(['([)]'], false, testMethod);
    }
  ],
};
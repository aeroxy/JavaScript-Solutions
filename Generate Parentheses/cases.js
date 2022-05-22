const expect = require('../test/expect');
const method = require('./solution3');
const assert = require('assert');

function testMethod (input, output) {
  const result = method(...input);
  return assert.equal( 
    JSON.stringify(output.sort()),
    JSON.stringify(result.sort()),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([3], ['((()))','(()())','(())()','()(())','()()()'], testMethod);
    },
    () => {
      expect([1], ['()'], testMethod);
    },
  ],
};
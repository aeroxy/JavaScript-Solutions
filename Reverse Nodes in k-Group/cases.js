const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const {
  createNodeFromArray,
  createArrayFromNodes,
} = method;

function testMethod (input, output) {
  const result = method(...input);
  const resultAsArray = createArrayFromNodes(result);
  return assert.equal( 
    JSON.stringify(output),
    JSON.stringify(resultAsArray),
  );
};

module.exports = {
  testCases: [
    () => {
      expect([
        createNodeFromArray([1,2,3,4,5]),
        2,
      ], [2,1,4,3,5], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([1,2,3,4,5]),
        3,
      ], [3,2,1,4,5], testMethod);
    },
  ],
};
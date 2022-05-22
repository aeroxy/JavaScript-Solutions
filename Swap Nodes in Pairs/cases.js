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
        createNodeFromArray([1,2,3,4]),
      ], [2,1,4,3], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([]),
      ], [], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([1]),
      ], [1], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([4,0,6,2,8]),
      ], [0,4,2,6,8], testMethod);
    },
  ],
};
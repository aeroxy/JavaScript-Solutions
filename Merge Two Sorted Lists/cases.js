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
        createNodeFromArray([1,2,4]),
        createNodeFromArray([1,3,4]),
      ], [1,1,2,3,4,4], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([]),
        createNodeFromArray([]),
      ], [], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([]),
        createNodeFromArray([0]),
      ], [0], testMethod);
    },
  ],
};
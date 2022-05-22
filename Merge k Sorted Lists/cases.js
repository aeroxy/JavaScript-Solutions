const expect = require('../test/expect');
const method = require('./solution2');
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
        [
          createNodeFromArray([1,4,5]),
          createNodeFromArray([1,3,4]),
          createNodeFromArray([2,6]),
        ],
      ], [1,1,2,3,4,4,5,6], testMethod);
    },
    () => {
      expect([
        [],
      ], [], testMethod);
    },
    () => {
      expect([
        [
          createNodeFromArray([]),
        ],
      ], [], testMethod);
    },
  ],
};
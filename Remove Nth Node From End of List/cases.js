const expect = require('../test/expect');
const method = require('.');
const assert = require('assert');

const testMethod = (input, output) => {
  const result = method(...input);
  return assert.equal(
    JSON.stringify(output),
    JSON.stringify(result),
  );
};

function addNode(array, index, node = null) {
  if (array.length === index) {
    return node;
  }
  const newNode = {
    val: array[index],
    next: node,
  };
  return addNode(array, ++index, newNode);
}

function createNodeFromArray(array) {
  return addNode(array.reverse(), 0) || {};
}

module.exports = {
  testCases: [
    () => {
      expect([
        createNodeFromArray([1,2,3,4,5]),
        2,
      ], [1,2,3,5], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([1]),
        1,
      ], [], testMethod);
    },
    () => {
      expect([
        createNodeFromArray([1,2]),
        1,
      ], [1], testMethod);
    },
  ],
};
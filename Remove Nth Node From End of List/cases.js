const expect = require('../test/expect');
const method = require('./solution2');
const assert = require('assert');

function saveValue(store, node) {
  if (!node) {
    return;
  }
  store.push(node.val || 0);
  if (node.next) {
    saveValue(store, node.next);
  }
}

function createArrayFromNodes(node) {
  const store = [];
  saveValue(store, node);
  return store;
}

const testMethod = (input, output) => {
  const result = method(...input);
  return assert.equal(
    JSON.stringify(output),
    JSON.stringify(createArrayFromNodes(result)),
  );
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function addNode(array, index, node = null) {
  if (array.length === index) {
    return node;
  }
  const newNode = new ListNode(array[index], node);
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
    () => {
      expect([
        createNodeFromArray([1,2]),
        2,
      ], [2], testMethod);
    },
  ],
};
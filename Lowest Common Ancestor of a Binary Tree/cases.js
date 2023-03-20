const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  assert.equal(result ? result.val : result, output);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype.valueOf = function() {
  return this.val;
}

function arrayToTree(arr) {
  function createNode(i) {
    if (i >= arr.length || arr[i] === null) {
      return null;
    }
    let node = new TreeNode(arr[i]);
    node.left = createNode(2 * i + 1);
    node.right = createNode(2 * i + 2);
    return node;
  }
  return createNode(0);
}

module.exports = {
  testCases: [
    () => {
      expect([arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 1], 3, testMethod);
    },
    () => {
      expect([arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), 5, 4], 5, testMethod);
    },
    () => {
      expect([arrayToTree([1, 2]), 1, 2], 1, testMethod);
    },
  ],
};

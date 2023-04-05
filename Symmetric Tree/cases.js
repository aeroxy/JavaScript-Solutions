const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(result, output);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function arrayToTree(arr) {
  if (!arr.length) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) {
      const left = new TreeNode(arr[i]);
      node.left = left;
      queue.push(left);
    }
    i++;
    if (i >= arr.length) {
      break;
    }
    if (arr[i] !== null) {
      const right = new TreeNode(arr[i]);
      node.right = right;
      queue.push(right);
    }
    i++;
  }
  return root;
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToTree([1,2,2,3,4,4,3]),
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([1,2,2,null,3,null,3]),
      ],
      false,
      testMethod
    ),
  ],
};

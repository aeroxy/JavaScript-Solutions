const expect = require("../test/expect");
const method = require("./solution5");
const assert = require("assert");

function testMethod(input, output) {
  method(...input);
  return assert.deepEqual(treeToArray(input[0]), output);
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

function treeToArray(root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  // Remove any trailing nulls from the array
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToTree([1, 2, 5, 3, 4, null, 6]),
      ],
      [1, null, 2, null, 3, null, 4, null, 5, null, 6],
      testMethod,
    ),
    () => expect(
      [
        arrayToTree([]),
      ],
      [],
      testMethod
    ),
    () => expect(
      [
        arrayToTree([0]),
      ],
      [0],
      testMethod
    ),
  ],
};

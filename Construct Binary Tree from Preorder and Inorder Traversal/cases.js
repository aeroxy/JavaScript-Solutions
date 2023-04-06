const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(treeToArray(result), output);
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
        [3, 9, 20, 15, 7],
        [9, 3, 15, 20, 7],
      ],
      [3, 9, 20, null, null, 15, 7],
      testMethod,
    ),
    () => expect(
      [
        [-1],
        [-1],
      ],
      [-1],
      testMethod
    ),
    () => expect(
      [
        [1,2,3],
        [3,2,1],
      ],
      [1,2,null,3],
      testMethod
    ),
  ],
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const stack = [];
  let count = 0;

  while (root || stack.length > 0) {
    // Traverse the left subtree and add nodes to the stack
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // Pop the top node from the stack and process it
    root = stack.pop();
    count++;

    // If this is the kth smallest node, return its value
    if (count === k) {
      return root.val;
    }

    // Traverse the right subtree
    root = root.right;
  }

  // If the kth smallest element is not found, return null
  return null;
};

module.exports = kthSmallest;

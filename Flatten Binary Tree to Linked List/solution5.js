/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const stack = [];
  let node = root;
  while (node || stack.length) {
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      node.right = node.left;
      node.left = null;
    } else if (stack.length) {
      const next = stack.pop();
      node.right = next;
    }
    node = node.right;
  }
};

module.exports = flatten;
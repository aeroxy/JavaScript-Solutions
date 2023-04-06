/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const reduce = (node) => {
    if (!node) return null;
    const leftTail = reduce(node.left);
    const rightTail = reduce(node.right);
    if (node.left) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    }
    return rightTail || leftTail || node;
  };
  reduce(root);
};

module.exports = flatten;
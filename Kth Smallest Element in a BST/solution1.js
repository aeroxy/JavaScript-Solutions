/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0;
  let result = null;
  const inOrderTraversal = (node) => {
    if (!node || result !== null) {
      return;
    }
    inOrderTraversal(node.left);
    ++count;
    if (count === k) {
      result = node.val;
      return;
    }
    inOrderTraversal(node.right);
  };
  inOrderTraversal(root);
  return result;
};

module.exports = kthSmallest;

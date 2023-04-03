/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const result = [];
  if (!root) {
    return result;
  }
  const reduce = (node) => {
    if (node.left) {
      reduce(node.left);
    }
    result.push(node.val);
    if (node.right) {
      reduce(node.right);
    }
  }
  reduce(root);
  return result;
}

module.exports = inorderTraversal;
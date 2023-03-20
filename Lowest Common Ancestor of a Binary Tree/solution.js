/**
 * @param {number[]} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (!root || root == p || root == q) {
    return root;
  }
  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);
  if (leftNode && rightNode) {
    return root;
  }
  return leftNode || rightNode;
}

module.exports = lowestCommonAncestor;
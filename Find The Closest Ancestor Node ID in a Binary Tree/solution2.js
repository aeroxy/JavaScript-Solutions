/**
 * @param {TreeNode} root
 * @param {string} leftId
 * @param {string} rightId
 * @return {TreeNode | null}
 */
function findClosestAncestorNode(root, leftId, rightId) {
  if (!root) {
    return null;
  }
  if (root.id === leftId || root.id === rightId) {
    return root;
  }
  const leftNode = findClosestAncestorNode(root.left, leftId, rightId);
  const rightNode = findClosestAncestorNode(root.right, leftId, rightId);
  if (leftNode && rightNode) {
    return root;
  }
  if (leftNode) {
    return leftNode;
  }
  if (rightNode) {
    return rightNode;
  }
}

/**
 * @param {TreeNode} root
 * @param {string} leftId
 * @param {string} rightId
 * @return {string | null}
 */
function findClosestAncestorNodeId(root, leftId, rightId) {
  if (root.id === leftId || root.id === rightId) {
    return null;
  }
  const node = findClosestAncestorNode(root, leftId, rightId);
  return node ? node.id : null;
}

module.exports = findClosestAncestorNodeId;
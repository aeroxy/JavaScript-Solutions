/**
 * @param {TreeNode} node
 * @param {string} nodeId
 * @param {TreeNode[]} path
 * @return {TreeNode[] | null}
 */
function findPathToNode(node, nodeId, path = []) {
  if (!node) {
    return null;
  }
  path.push(node);
  if (node.id === nodeId) {
    path.pop();
    return path;
  }
  const leftPath = findPathToNode(node.left, nodeId, path);
  const rightPath = findPathToNode(node.right, nodeId, path);
  if (leftPath || rightPath) {
    return path;
  }
  path.pop();
  return null;
}

/**
 * @param {TreeNode} root
 * @param {string} leftId
 * @param {string} rightId
 * @return {string | null}
 */
function findClosestAncestorNodeId(root, leftId, rightId) {
  const leftPath = findPathToNode(root, leftId);
  const rightPath = findPathToNode(root, rightId);
  if (!leftPath || !rightPath) {
    return null;
  }
  let i = 0;
  while (i < leftPath.length && i < rightPath.length && leftPath[i].id === rightPath[i].id) {
    i++;
  }
  return i === 0 ? null : leftPath[i - 1].id;
}

module.exports = findClosestAncestorNodeId;
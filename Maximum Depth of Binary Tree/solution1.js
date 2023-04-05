/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0;
  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    ++level;
    result = Math.max(result, level);
    dfs(node.left, level);
    dfs(node.right, level);
  };
  dfs(root, 0);

  return result;
};

module.exports = maxDepth;
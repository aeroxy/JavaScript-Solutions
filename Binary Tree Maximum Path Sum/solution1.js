/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let result = -Infinity;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    const sum = left + right + node.val;
    result = Math.max(result, sum);
    return Math.max(left, right) + node.val;
  }
  dfs(root);
  return result;
};

module.exports = maxPathSum;
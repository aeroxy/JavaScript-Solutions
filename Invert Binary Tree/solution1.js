/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const dfs = (node) => {
    if (!node) {
      return;
    }
    [node.left, node.right] = [node.right, node. left];
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return root;
};

module.exports = invertTree;
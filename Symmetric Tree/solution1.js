/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const dfs = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }

    return left.val === right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left);
  };

  return root ? dfs(root.left, root.right) : true;
};

module.exports = isSymmetric;
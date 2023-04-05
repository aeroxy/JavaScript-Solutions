/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];

  const reduce = (node, level) => {
    if (!node) {
      return;
    }
    result[level] = result[level] ?? [];
    result[level].push(node.val);

    ++level;
    reduce(node.left, level);
    reduce(node.right, level);
  };

  reduce(root, 0);

  return result;
};

module.exports = levelOrder;
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const reduce = (node, result, i) => {
    if (node) {
      if (i in result === false) {
        result[i] = node.val;
      }
      reduce(node.right, result, ++i);
      reduce(node.left, result, i);
    }
    return result;
  };
  return reduce(root, [], 0);
};

module.exports = rightSideView;
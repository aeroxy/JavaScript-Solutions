/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const reduce = (node, queue) => {
    if (!node && !queue.length) {
      return null;
    }
    node.right && queue.push(node.right);
    node.right = node.left || queue.pop();
    node.left = null;
    return reduce(node.right, queue);
  };
  return reduce(root, []);
};

module.exports = flatten;
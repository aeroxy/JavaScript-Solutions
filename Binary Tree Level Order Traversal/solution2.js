/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  const queue = root ? [ root ] : [];

  while (queue.length) {
    const level = [];
    const n = queue.length;

    for (let i = 0; i < n; ++i) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    level.length && result.push(level);
  }

  return result;
};

module.exports = levelOrder;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0;
  const queue = root ? [root] : [];

  while (queue.length) {
    ++result;
    const n = queue.length;
    for (let i = 0; i < n; ++i) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};

module.exports = maxDepth;
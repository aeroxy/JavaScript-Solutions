/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root) {
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      [node.left, node.right] = [node.right, node.left];
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return root;
};

module.exports = invertTree;
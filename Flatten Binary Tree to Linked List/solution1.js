/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return;
  }
  const queue = [];
  const reduce = (node) => {
    if (!node) {
      if (queue.length) {
        const lastRight = queue.pop();
        return reduce(lastRight);
      }
      return null;
    }
    queue.push(node.right);
    return new TreeNode(
      node.val,
      null,
      reduce(node.left),
    );
  };
  const result = reduce(root);
  root.left = null;
  root.right = result.right;
};

module.exports = flatten;
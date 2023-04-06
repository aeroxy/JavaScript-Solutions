/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let prev = null;
  const reduce = (node) => {
    if (!node) return;
    reduce(node.right);
    reduce(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  };
  reduce(root);
};

module.exports = flatten;
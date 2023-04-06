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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) {
    return null;
  }

  const rootVal = preorder[0];
  const rootIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex),
  );

  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1),
  );

  return root;
};

module.exports = buildTree;
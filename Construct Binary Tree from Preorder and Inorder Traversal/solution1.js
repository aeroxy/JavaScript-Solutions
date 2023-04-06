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
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }
  const reduce = (pStart, pEnd, iStart, iEnd) => {
    if (pStart > pEnd) {
      return null;
    }
    const top = preorder[pStart];
    const rootIndex = inorder.indexOf(top);
    const leftSize = rootIndex - iStart;
    const rightSize = iEnd - rootIndex;

    return new TreeNode(
      top,
      reduce(pStart + 1, pStart + leftSize, iStart, rootIndex - 1),
      reduce(pEnd - rightSize + 1, pEnd, rootIndex + 1, iEnd),
    );
  };

  const lastIndex = preorder.length - 1;

  return reduce(0, lastIndex, 0, lastIndex);
};

module.exports = buildTree;
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  if (!root) {
    return result;
  }
  const queue = [[root, 0]];
  
  while (queue.length) {
    const [node, i] = queue.shift();

    if (i in result === false) {
      result[i] = node.val;
    }
  
    if (node.right) {
      queue.push([node.right, i + 1]);
    }
    if (node.left) {
      queue.push([node.left, i + 1]);
    }
  }

  return result;
};

module.exports = rightSideView;
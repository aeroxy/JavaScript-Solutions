# Intuition
This problem is asking us to find the maximum depth of a binary tree. The depth of a node in a binary tree is the number of edges from the root to that node. Therefore, the maximum depth of a binary tree is the maximum depth of its leaf nodes.

# Approach
We can solve this problem using a recursive approach. We can define a recursive function `maxDepth` that takes a root node as input and returns the maximum depth of the binary tree rooted at that node. The base case of the recursion is when the root node is null, in which case we return 0. Otherwise, we recursively calculate the maximum depth of the left and right subtrees and return the maximum of those values plus 1, to account for the current node.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the binary tree. We visit each node exactly once.

- Space complexity: $$O(h)$$, where h is the height of the binary tree. This is the maximum depth of the recursive call stack.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
};
```
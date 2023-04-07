# Intuition
The maximum path sum in a binary tree can be calculated by traversing the tree and computing the maximum sum of a path that starts at any node and goes downwards. We can keep track of the maximum sum seen so far and update it whenever we find a larger sum.

# Approach
We can use a recursive depth-first search (DFS) approach to compute the maximum sum of a path starting at each node. For each node, we can compute the maximum sum of a path that goes through the node by adding the maximum sums of the left and right subtrees (if they are positive), plus the value of the current node.

However, we cannot simply return the maximum sum of a path starting at the current node, since this would not allow us to include nodes above the current node in the path. Instead, we can return the maximum sum of a path that starts at the current node and goes downwards. We can update the global maximum sum seen so far whenever we compute the maximum sum of a path that goes through a node.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the tree. We visit each node once.
    
- Space complexity: $$O(h)$$, where h is the height of the tree. The space used by the recursive call stack is proportional to the height of the tree, which is the maximum number of nodes on the path from the root to a leaf. In the worst case, the tree can be skewed and have a height of $$n-1$$, so the space complexity is $$O(n)$$. However, if the tree is balanced, the height is $$O(log(n))$$ and the space complexity is $$O(log(n))$$.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let result = -Infinity;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);
    const sum = left + right + node.val;
    result = Math.max(result, sum);
    return Math.max(left, right) + node.val;
  }
  dfs(root);
  return result;
};
```
# Intuition
The problem requires finding the maximum depth of a binary tree. We can solve this problem using depth-first search (DFS) by traversing the tree and keeping track of the depth at each node. The maximum depth will be the maximum depth observed during the traversal.

# Approach
The approach we will use is to perform a depth-first search on the tree. At each node, we will increment the current depth and compare it to the current maximum depth. We will then recursively call the function on the left and right subtrees of the current node. When we reach a leaf node, we will return from the function. Finally, we will return the maximum depth obtained during the traversal.

# Complexity
- Time complexity: The time complexity of the solution is $$O(n)$$ because we need to visit each node of the tree once to determine the maximum depth.
    
- Space complexity: The space complexity of the solution is $$O(h)$$ where h is the height of the tree. This is because at any point in time, the maximum number of function calls on the call stack will be equal to the height of the tree.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0;
  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    ++level;
    result = Math.max(result, level);
    dfs(node.left, level);
    dfs(node.right, level);
  };
  dfs(root, 0);

  return result;
};
```
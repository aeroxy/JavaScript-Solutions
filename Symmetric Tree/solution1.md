# Intuition
The problem requires us to check if a binary tree is a mirror image of itself, which means that it should be a reflection of itself along the vertical axis. A simple approach is to compare the left and right subtrees of the tree, and check if they are mirror images of each other.

# Approach
We can use a recursive approach to solve this problem. We define a helper function that takes two nodes as arguments, and checks if they are mirror images of each other. The function returns true if both nodes are null, or if their values are equal and their left and right subtrees are mirror images of each other.

We call this helper function with the left and right children of the root node, and return the result. If the root node is null, we return true, as an empty tree is considered a mirror image of itself.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the tree. We visit each node exactly once.

- Space complexity: $$O(n)$$, in the worst case, when the tree is completely unbalanced and resembles a linked list, the recursive call stack can go as deep as the number of nodes in the tree.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const dfs = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (!left || !right) {
      return false;
    }

    return left.val === right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left);
  };

  return root ? dfs(root.left, root.right) : true;
};
```
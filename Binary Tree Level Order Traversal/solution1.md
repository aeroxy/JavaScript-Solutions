# Intuition
The problem requires us to traverse a binary tree in a level-order manner, and return the nodes at each level as an array. We can use a recursive approach to traverse the tree, keeping track of the current level as we go along.

# Approach
We can define a recursive function that takes two arguments - the current node and the current level. We initialize an empty array to store the nodes at the current level. We add the value of the current node to the array, and then recursively call the function on the left and right children of the node, with the level incremented by 1.

We start the traversal by calling this function with the root node and level 0. At each level, we push the array of nodes to a results array. Finally, we return the results array.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the tree. We visit each node exactly once.

- Space complexity: $$O(n)$$, where n is the number of nodes in the tree. We store the nodes at each level in a separate array.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];

  const reduce = (node, level) => {
    if (!node) {
      return;
    }
    result[level] = result[level] ?? [];
    result[level].push(node.val);

    ++level;
    reduce(node.left, level);
    reduce(node.right, level);
  };

  reduce(root, 0);

  return result;
};
```
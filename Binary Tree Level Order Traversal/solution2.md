# Intuition
The problem requires us to traverse a binary tree in a level-order manner, and return the nodes at each level as an array. We can use a queue-based approach to traverse the tree, processing nodes in a level-by-level order.

# Approach
We can initialize a queue with the root node, and then enter a loop that continues while there are nodes in the queue. In each iteration of the loop, we initialize an empty array to store the nodes at the current level. We get the number of nodes at the current level by getting the length of the queue. We then dequeue each node from the queue, add its value to the current level array, and enqueue its left and right children if they exist.

After processing all nodes at the current level, we add the current level array to a results array, but only if it is not empty. Finally, we return the results array.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the tree. We visit each node exactly once.
- Space complexity: $$O(n)$$, where n is the number of nodes in the tree. In the worst case, the queue can hold all the nodes in the last level of a complete binary tree.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  const queue = root ? [ root ] : [];

  while (queue.length) {
    const level = [];
    const n = queue.length;

    for (let i = 0; i < n; ++i) {
      const node = queue.shift();
      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    level.length && result.push(level);
  }

  return result;
};
```
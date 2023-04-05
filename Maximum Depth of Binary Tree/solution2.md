# Intuition
The problem is asking us to find the maximum depth of a binary tree. The depth of a node in a binary tree is the number of edges from the root to that node. Therefore, the maximum depth of a binary tree is the maximum depth of its leaf nodes.

# Approach
We can solve this problem using a Breadth First Search (BFS) algorithm. We start by initializing a queue with the root node of the tree. Then, we iterate over the queue until it is empty. For each node in the queue, we add its left and right children to the queue if they exist. We also keep track of the level we are on and increment it for each level we traverse. Once the queue is empty, we return the level we traversed, which represents the maximum depth of the binary tree.

# Complexity
*   Time complexity: $$O(n)$$, where n is the number of nodes in the binary tree. We visit each node exactly once.
*   Space complexity: $$O(w)$$, where w is the maximum width of the binary tree. In the worst case, the queue will contain all the nodes in the last level of the binary tree, which can be at most the width of the binary tree.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0;
  const queue = root ? [root] : [];

  while (queue.length) {
    ++result;
    const n = queue.length;
    for (let i = 0; i < n; ++i) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};
```
# Intuition
Given a binary tree, the problem requires us to find the right side view of the tree. The right side view consists of the last (rightmost) node in each level of the tree. We can solve this problem by performing a breadth-first search (BFS) on the tree and storing the rightmost value at each depth.

# Approach
1.  Initialize an empty result array.
2.  If the tree is empty, return the result array.
3.  Initialize a queue with the root node and its depth (0).
4.  While the queue is not empty: a. Dequeue the first element (node and its depth) from the queue. b. If the current depth `i` is not yet in the result array, it means we have not yet found the rightmost value for this depth. So we can add the current node's value to the result array. c. Enqueue the right child of the current node (if it exists) along with its depth (i + 1). d. Enqueue the left child of the current node (if it exists) along with its depth (i + 1).
5.  Return the result array.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the tree. We visit each node once during the BFS.

- Space complexity: $$O(w)$$, where w is the width of nodes in the tree.

# Code
```js
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
```
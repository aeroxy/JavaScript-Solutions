# Intuition
The problem requires us to flatten a binary tree to a linked list in-place. One way to do this is to use a modified preorder traversal of the tree and keep track of the previous node visited. For each node, we set its left child to null and its right child to the previous node visited. At the end of the traversal, the input tree will be flattened into a linked list.

# Approach
To implement the above approach, we can use a recursive function to perform the modified preorder traversal. We start by setting the previous node visited to null. Then, for each node, we perform the following steps:

*   Recursively flatten the right subtree.
*   Recursively flatten the left subtree.
*   Set the node's left child to null and its right child to the previous node visited.
*   Update the previous node visited to be the current node.

Finally, we call the recursive function on the root node to start the traversal.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the binary tree. We visit each node exactly once during the traversal.

- Space complexity: $$O(2*h+n)$$, where h is the height of the binary tree. This is the space used by the recursive call stack and for each recursive call we will store the right node in the queue. We also created a new tree to store all the data before modifying the original tree. In the worst case, the tree is completely unbalanced and the space complexity becomes $$O(3*n)$$.

# Code
```js
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return;
  }
  const queue = [];
  const reduce = (node) => {
    if (!node) {
      if (queue.length) {
        const lastRight = queue.pop();
        return reduce(lastRight);
      }
      return null;
    }
    queue.push(node.right);
    return new TreeNode(
      node.val,
      null,
      reduce(node.left),
    );
  };
  const result = reduce(root);
  root.left = null;
  root.right = result.right;
};
```
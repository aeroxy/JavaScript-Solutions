# Intuition
The problem requires us to flatten a binary tree to a linked list in-place. One way to do this is to use a modified preorder traversal of the tree and keep track of the previous node visited. For each node, we set its left child to null and its right child to the previous node visited. At the end of the traversal, the input tree will be flattened into a linked list.

# Approach
The approach used in this implementation is similar to the intuition. We use a modified preorder traversal of the tree and keep track of the previous node visited. For each node, we perform the following steps:

- Recursively flatten the right subtree.
- Recursively flatten the left subtree.
- Set the node's left child to null and its right child to the previous node visited.
- Update the previous node visited to be the current node.

However, in this implementation, we perform the traversal in reverse order. We start by traversing the right subtree, then the left subtree, and finally the root node. This ensures that the current node's right child is set to the previous node visited before its left child, which is necessary to maintain the correct order.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the binary tree. We visit each node exactly once during the traversal.

- Space complexity: $$O(2*h)$$, where h is the height of the binary tree. This is the space used by the recursive call stack. We also use a tmp variable to store the tree fragment. In the worst case, the tree is completely unbalanced and the space complexity becomes $$O(2*n)$$.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let prev = null;
  const reduce = (node) => {
    if (!node) return;
    reduce(node.right);
    reduce(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  };
  reduce(root);
};
```
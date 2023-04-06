# Intuition
The problem requires us to flatten a binary tree to a linked list in-place. One way to do this is to use a modified preorder traversal of the tree and keep track of the previous node visited. For each node, we set its left child to null and its right child to the previous node visited. At the end of the traversal, the input tree will be flattened into a linked list.

# Approach
Here, we use a postorder traversal of the tree to flatten it into a linked list. We recursively traverse the left and right subtrees of the current node and get their respective tails (i.e., the last node in the flattened linked list of the subtree). If the current node has a left child, we set its tail's right child to the right subtree and set the left child as the new right child of the current node. Finally, we return the tail of the right subtree or the tail of the left subtree, or the current node itself if it has no children.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the binary tree. We visit each node exactly once during the traversal. While the time complexity is only $$O(n)$$, in each operation the task is relatively heavy. Thus it would come out slower than other $$O(n)$$ solutions.

- Space complexity: $$O(h)$$, where h is the height of the binary tree. This is the space used by the recursive call stack. In the worst case, the tree is completely unbalanced and the space complexity becomes $$O(n)$$.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const reduce = (node) => {
    if (!node) return null;
    const leftTail = reduce(node.left);
    const rightTail = reduce(node.right);
    if (node.left) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    }
    return rightTail || leftTail || node;
  };
  reduce(root);
};
```
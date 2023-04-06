# Intuition
The problem is to flatten a binary tree into a linked list in place, such that the nodes are in pre-order traversal. My intuition tells me that I can use a stack to keep track of the right child of each node, as I traverse the tree. Whenever I encounter a node with a left child, I can make the right child of the current node the left child of the current node, and then push the current right child onto the stack. This will ensure that the right child is processed after the left child. When I encounter a leaf node or a node with no left child, I can pop the top element from the stack and set it as the right child of the current node.

# Approach
The approach I will take is to initialize an empty stack and a node variable pointing to the root of the tree. I will traverse the tree using a while loop, which will continue until both the stack is empty and the current node is null. Within the loop, I will check if the current node has a right child, and if so, I will push it onto the stack. Then I will check if the current node has a left child, and if so, I will make the right child of the current node the left child of the current node, and then set the left child to null. If the current node does not have a left child, I will check if the stack is not empty, and if so, I will pop the top element from the stack and set it as the right child of the current node. Finally, I will set the current node to its right child.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the binary tree. The algorithm visits each node once.
    
- Space complexity: $$O(n)$$, where n is the number of nodes in the binary tree. The maximum size of the stack is equal to the maximum depth of the binary tree.
    
# Code
```js
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const stack = [];
  let node = root;
  while (node || stack.length) {
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      node.right = node.left;
      node.left = null;
    } else if (stack.length) {
      const next = stack.pop();
      node.right = next;
    }
    node = node.right;
  }
};
```
# Intuition
The problem is to construct a binary tree given the preorder and inorder traversal of the tree. The intuition is to use the properties of preorder and inorder traversals. In preorder traversal, the first element is always the root of the tree, and in inorder traversal, the root element separates the left and right subtrees. So, we can find the root element in inorder traversal and recursively construct left and right subtrees.

# Approach
The approach is to define a recursive function that takes two parameters, `preorder` and `inorder`. The base case of the recursion is when the `preorder` array is empty, then return `null`. Otherwise, take the first element of `preorder` array as the root element, and find the index of the root element in the `inorder` array. Then, construct a new `TreeNode` with the root element, and recursively call the function for left and right subtrees. The left subtree will be constructed by taking the slice of `preorder` array from 1 to the index of root element in `inorder` array, and the slice of `inorder` array from the beginning to the index of root element. The right subtree will be constructed by taking the slice of `preorder` array from the index of root element in `inorder` array + 1 to the end, and the slice of `inorder` array from the index of root element in `inorder` array + 1 to the end. Finally, return the constructed root node.

# Complexity
- Time complexity: The time complexity of the algorithm is $$O(n^2)$$ in the worst case when the binary tree is skewed. In the best case, the time complexity is $$O(n*log(n))$$ when the binary tree is balanced. The reason for the worst case time complexity is that we have to find the index of the root element in the inorder array for each recursive call, which takes $$O(n)$$ time. In the best case, the height of the binary tree is $$log(n)$$, and we make $$log(n)$$ recursive calls, and for each call, we need to find the index of the root element in the inorder array, which takes $$O(1)$$ time on average.
- Space complexity: The space complexity of the algorithm is $$O(n^2)$$ because we use $$O(n)$$ space for the recursion stack, and each recursive call creates a new `TreeNode` object. The `slice()` method creates a new array, which adds additional space complexity to the algorithm. Specifically, for each recursive call, we create two new arrays using the `slice()` method, which have a combined size of the original array.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length) {
    return null;
  }

  const rootVal = preorder[0];
  const rootIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex),
  );

  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1),
  );

  return root;
};
```
# Intuition
Given a binary tree, the problem requires us to find the right side view of the tree. The right side view consists of the last (rightmost) node in each level of the tree. We can solve this problem by performing a depth-first search (DFS) on the tree and storing the rightmost value at each depth.

# Approach
1.  Perform a depth-first search on the tree.
2.  During the traversal, maintain a current depth `i`.
3.  If the current depth `i` is not yet in the result array, it means we have not yet found the rightmost value for this depth. So we can add the current node's value to the result array.
4.  Traverse the right subtree first, incrementing the depth by 1.
5.  Then, traverse the left subtree, keeping the depth unchanged.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the tree. We visit each node once during the DFS.

- Space complexity: $$O(h)$$, where h is the height of the tree. This is the maximum height of the implicit call stack due to recursion.

# Code
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const reduce = (node, result, i) => {
    if (node) {
      if (i in result === false) {
        result[i] = node.val;
      }
      reduce(node.right, result, ++i);
      reduce(node.left, result, i);
    }
    return result;
  };
  return reduce(root, [], 0);
};
```
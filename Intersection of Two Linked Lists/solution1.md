# Intuition
Given two singly linked lists, we want to find the node at which they intersect. Our first thought is to traverse both linked lists simultaneously, while keeping track of the visited nodes in each list. If at any point we encounter a node that has already been visited in the other list, we return that node as the intersection point. If there is no intersection, we return null.

# Approach
1.  Initialize two pointers, one for each linked list (headA and headB).
2.  Traverse both linked lists simultaneously, checking if the current node has been visited before.
    *   If yes, return the current node as the intersection point.
    *   If not, mark the current node as visited and move to the next node.
3.  Repeat step 2 until we reach the end of both linked lists or find an intersection.
4.  If we reach the end of both linked lists without finding an intersection, return null.

# Complexity
- Time complexity: $$O(m+n)$$, where mmm is the length of `listA` and nnn is the length of `listB`. In the worst case, we have to traverse both linked lists completely to find the intersection or conclude that there is no intersection.

- Space complexity: $$O(m+n)$$, where mmm is the length of `listA` and nnn is the length of `listB`. In the worst case, we have to add the visited attribute to all nodes.

# Code
```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  while (headA !== headB) {
    if (headA) {
      if (headA.visited) {
        return headA;
      }
      headA.visited = true;
      headA = headA.next;
    }
    if (headB) {
      if (headB.visited) {
        return headB;
      }
      headB.visited = true;
      headB = headB.next;
    }
  }
  return headA ?? headB ?? null;
};
```
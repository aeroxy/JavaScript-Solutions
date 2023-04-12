# Intuition
Given two singly linked lists, we want to find the node at which they intersect. Our first thought is to traverse both linked lists simultaneously. If the pointers meet at a node, it is the intersection point. If there is no intersection, we return null. To ensure that we find the intersection point if it exists, we swap the starting points of the pointers after they reach the end of their respective lists.

# Approach
1.  Initialize two pointers, one for each linked list (pA for headA and pB for headB), and a counter called `ended` to keep track of how many times the pointers reach the end of their lists.
2.  Traverse both linked lists simultaneously.
    *   If pA is equal to pB, return pA (or pB) as the intersection point.
    *   If pA reaches the end of its list, reset pA to headB and increment `ended`. If pA has not reached the end of its list, move pA to the next node.
    *   If pB reaches the end of its list, reset pB to headA and increment `ended`. If pB has not reached the end of its list, move pB to the next node.
3.  Repeat step 2 until `ended` is equal to 4 (both pointers have reached the end of both linked lists) or an intersection point is found.
4.  If `ended` is equal to 4 and no intersection point is found, return null.

# Complexity
- Time complexity: $$O(2m+2n)$$, where m is the length of `listA` and nnn is the length of `listB`. In the worst case, we have to traverse both linked lists twice to find the intersection or conclude that there is no intersection. While this solution has a higher time complexity than the Dynamic Programming solution, each of its operation is lighter, and thus the overall speed is faster. 
- Space complexity: $$O(1)$$, since we only use a constant amount of additional space to store the pointers and the counter.

# Code
```js
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let ended = 0;
  let pA = headA;
  let pB = headB;
  while (ended < 4) {
    if (pA === pB) {
      return pA;
    }
    if (!pA.next) {
      ++ended;
      pA = headB;
    } else {
      pA = pA.next;
    }
    if (!pB.next) {
      ++ended;
      pB = headA;
    } else {
      pB = pB.next;
    }
  }
  return null;
};
```
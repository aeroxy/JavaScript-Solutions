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

module.exports = getIntersectionNode;
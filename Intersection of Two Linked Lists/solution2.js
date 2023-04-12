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

module.exports = getIntersectionNode;
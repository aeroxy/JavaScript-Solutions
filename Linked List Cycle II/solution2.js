/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next || !head.next.next) {
    return null;
  }
  let slow = head.next;
  let fast = head.next.next;
  while (slow !== fast) {
    if (!slow?.next || !fast?.next?.next) {
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  while (slow !== head) {
    slow = slow.next;
    head = head.next;
  }
  return head;
};

module.exports = detectCycle;
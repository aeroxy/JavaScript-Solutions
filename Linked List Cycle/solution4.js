/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next || !head.next.next) {
    return false;
  }
  let slow = head.next;
  let fast = head.next.next;
  while (slow !== fast) {
    if (!slow?.next || !fast?.next?.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

module.exports = hasCycle;
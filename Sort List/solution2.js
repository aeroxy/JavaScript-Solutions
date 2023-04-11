class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head?.next) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;

  let sortedFirstHalf = sortList(head);
  let sortedSecondHalf = sortList(secondHalf);

  let dummy = new ListNode(0);
  let tail = dummy;

  while (sortedFirstHalf && sortedSecondHalf) {
    if (sortedFirstHalf.val < sortedSecondHalf.val) {
      tail.next = sortedFirstHalf;
      sortedFirstHalf = sortedFirstHalf.next;
    } else {
      tail.next = sortedSecondHalf;
      sortedSecondHalf = sortedSecondHalf.next;
    }
    tail = tail.next;
  }

  tail.next = sortedFirstHalf ?? sortedSecondHalf;

  return dummy.next;
};

module.exports = sortList;
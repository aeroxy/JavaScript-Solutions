/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, acc = new ListNode(0), cur, sum = 0) => {
  sum += (l1.val || 0) + (l2.val || 0);
  cur = cur || acc;
  cur.next = new ListNode(sum % 10);
  sum = sum > 9 ? 1 : 0;
  if (l1.next || l2.next) {
    return addTwoNumbers(l1.next || {}, l2.next || {}, acc, cur.next, sum);
  } else {
    sum && (cur.next.next = new ListNode(1));
    return acc.next;
  }
};
/**
 * 108 ms
 * 38.8 MB
 */
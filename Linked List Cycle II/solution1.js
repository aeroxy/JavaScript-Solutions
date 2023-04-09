/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return head;
    }
    cache.add(head);
    head = head.next;
  }
  return null;
};

module.exports = detectCycle;
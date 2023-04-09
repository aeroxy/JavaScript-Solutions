/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    }
    cache.add(head);
    head = head.next;
  }
  return false;
};

module.exports = hasCycle;
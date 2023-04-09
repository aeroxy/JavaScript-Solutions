/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  while (head) {
    if (head.visited) {
      return true;
    }
    head.visited = true;
    head = head.next;
  }
  return false;
};

module.exports = hasCycle;
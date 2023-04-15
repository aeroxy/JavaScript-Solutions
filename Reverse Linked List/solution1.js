/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return head;
  }
  let node = head.next;
  let lastNode = head;
  while (node) {
    const nextNode = node.next;
    node.next = lastNode;
    lastNode = node;
    node = nextNode;
  }
  head.next = null;
  return lastNode;
};

module.exports = reverseList;
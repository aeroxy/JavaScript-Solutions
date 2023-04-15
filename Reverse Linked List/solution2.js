/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return head;
  }
  let result = null;
  const reverse = (node, next) => {
    if (next) {
      reverse(next, next.next);
      next.next = node;
    } else {
      result = node;
    }
  };
  reverse(head, head.next);
  head.next = null;
  return result;
};

module.exports = reverseList;
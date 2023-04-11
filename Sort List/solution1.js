/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr = arr.sort((a, b) => a.val - b.val);
  arr.forEach((node, index) => {
    node.next = arr[index + 1] ?? null;
  });
  return arr[0] ?? null;
};

module.exports = sortList;
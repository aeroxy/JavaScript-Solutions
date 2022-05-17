function saveValue(store, node) {
  store.push(node.val || 0);
  if (node.next) {
    saveValue(store, node.next);
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const store = [];
  saveValue(store, head);
  store.splice(0 - n, 1);
  return store;
};

module.exports = removeNthFromEnd;
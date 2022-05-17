function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function addNode(array, index, node = null) {
  if (array.length === index) {
    return node;
  }
  const newNode = new ListNode(array[index], node);
  return addNode(array, ++index, newNode);
}

function createNodeFromArray(array) {
  return addNode(array.reverse(), 0);
}

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
  return createNodeFromArray(store);
};

module.exports = removeNthFromEnd;
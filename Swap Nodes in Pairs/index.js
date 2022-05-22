/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  let lastVal;
  let node = head;
  while (node) {
    if (typeof lastVal === 'number') {
      node.val = lastVal;
      lastVal = undefined;
    } else {
      lastVal = node.val;
      node.val = node.next?.val ?? node.val;
    }
    node = node.next;
  }
  return head;
};

module.exports = swapPairs;

function saveValue(store, node) {
  if (typeof node?.val !== 'number') {
    return;
  }
  store.push(node.val);
  if (node.next) {
    saveValue(store, node.next);
  }
}

module.exports.saveValue = saveValue;

function createArrayFromNodes(node) {
  const store = [];
  saveValue(store, node);
  return store;
}

module.exports.createArrayFromNodes = createArrayFromNodes;

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

module.exports.ListNode = ListNode;

function addNode(array, index, node = null) {
  if (array.length === index) {
    return node;
  }
  const newNode = new ListNode(array[index], node);
  return addNode(array, ++index, newNode);
}

module.exports.addNode = addNode;

function createNodeFromArray(array) {
  return addNode(array.reverse(), 0) || null;
}

module.exports.createNodeFromArray = createNodeFromArray;
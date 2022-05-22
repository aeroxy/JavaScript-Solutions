/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(array) {
  const parent = new ListNode();
  let node = parent;
  while (node) {
    let nextVal;
    let index;
    for (let i = 0; i < array.length; i++) {
      const newNode = array[i];
      const val = newNode?.val;
      if (typeof val !== 'number') {
        continue;
      }
      if (nextVal === undefined || nextVal > val) {
        index = i;
        nextVal = val;
        node.next = newNode;
      }
    }
    node = node.next;
    array[index] = array[index]?.next;
  }
  return parent.next;
}

module.exports = mergeKLists;

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
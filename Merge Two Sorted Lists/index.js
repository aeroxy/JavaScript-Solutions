/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  const array1 = createArrayFromNodes(list1);
  const array2 = createArrayFromNodes(list2);
  const sortedArray = [
    ...array1,
    ...array2,
  ].sort((a, b) => a - b);
  return createNodeFromArray(sortedArray);
};

module.exports = mergeTwoLists;

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
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
  const parent = new ListNode();
  let node1 = list1;
  let node2 = list2;
  let node3 = parent;
  while (node3) {
    const val1 = node1?.val;
    const val2 = node2?.val;

    if (typeof val2 !== 'number' || val1 <= val2) {
      if (node1) {
        node3.next = node1;
      }
      node1 = node1?.next;
    } else if (typeof val1 !== 'number' || val2 <= val1) {
      if (node2) {
        node3.next = node2;
      }
      node2 = node2?.next;
    }
    node3 = node3.next;
  }
  return parent.next;
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
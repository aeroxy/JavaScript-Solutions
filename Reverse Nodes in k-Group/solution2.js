function reverse(head, tail) {
  let currentNode = head;
  let next = null;
  let prev = null;
  
  while (currentNode && currentNode !== tail) {
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }

  return prev;
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
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  /* check if nodes is shallower than steps */
  let index = k;
  let currentNode = head;
  while (currentNode && index-- > 0) {
    currentNode = currentNode.next;
  }
  if (index > 0) {
    return head;
  }
  const newTail = head; // reverse the start to tail
  const newHead = reverse(head, currentNode); // reverse the tail (of current steps) to head
    
  if (currentNode) {
    newTail.next = reverseKGroup(currentNode, k);
  }
  
  return newHead;
};

module.exports = reverseKGroup;

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
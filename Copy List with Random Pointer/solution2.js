/**
 * @param {number} val
 * @param {Node | null} next
 * @param {Node | null} random
 * @return {void}
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const hashMap = new WeakMap();
  let origNode = head;
  const clone = origNode ? new Node(origNode.val, null, null) : origNode;
  let cloneNode = clone;

  while (origNode) {
    if (origNode.next) {
      cloneNode.next = new Node(origNode.next.val, null, null);
    }
    hashMap.set(origNode, cloneNode);
    origNode = origNode.next;
    cloneNode = cloneNode.next;
  }

  origNode = head;
  cloneNode = clone;

  while (origNode) {
    cloneNode.random = origNode.random ? hashMap.get(origNode.random) : origNode.random;
    origNode = origNode.next;
    cloneNode = cloneNode.next;
  }

  return clone;
};

module.exports = copyRandomList;
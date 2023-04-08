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

  while (origNode) {
    hashMap.set(origNode, new Node(origNode.val, null, null));
    origNode = origNode.next;
  }

  origNode = head;
  const clone = hashMap.get(origNode);
  let cloneNode = clone;

  while (origNode) {
    cloneNode.next = hashMap.get(origNode.next) ?? null;
    cloneNode.random = hashMap.get(origNode.random) ?? null;
    origNode = origNode.next;
    cloneNode = cloneNode.next;
  }

  return clone;
};

module.exports = copyRandomList;
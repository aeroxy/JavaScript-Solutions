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
var copyRandomList = function(head) {
  let origNode = head;
  const oCache = [];
  const cCache = [];
  let clone = origNode ? new Node(origNode.val, null, null) : origNode;
  let cloneNode = clone;
  while (origNode) {
    if (origNode.next) {
      cloneNode.next = new Node(origNode.next.val, null, null);
    }
    oCache.push(origNode);
    cCache.push(cloneNode);
    origNode = origNode.next;
    cloneNode = cloneNode.next;
  }
  origNode = head;

  const pointers = [];
  while (origNode) {
    const index = oCache.indexOf(origNode.random);
    pointers.push(index);
    origNode = origNode.next;
  }

  cloneNode = clone;
  let index = 0;
  while (cloneNode) {
    const pointer = pointers[index];
    cloneNode.random = pointer === -1 ? null : cCache[pointer];
    cloneNode = cloneNode.next;
    ++index;
  }

  return clone;
};

module.exports = copyRandomList;
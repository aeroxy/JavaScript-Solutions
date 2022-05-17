function deleteStep(step, node, parent) {
  if (!step) {
    parent.next = node?.next || null;
    return;
  }
  return deleteStep(--step, node.next, node);
}

function findDepth(depth, node) {
  if (!node) {
    return depth;
  }
  if (!node.next) {
    return ++depth;
  }
  return findDepth(++depth, node.next);
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
  const depth = findDepth(0, head);
  const steps = depth - n;
  if (steps < 0) {
    return null;
  }
  const parent = { next: head };
  deleteStep(steps, head, parent);
  return parent.next;
};

module.exports = removeNthFromEnd;
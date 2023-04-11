class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  // Initialize variables
  let groupSize = 1;
  let nodeCount = Infinity;
  let count = 0;
  const sortedHead = new ListNode(0, head);

  // Merge groups of linked list nodes
  while (groupSize < nodeCount) {
    let group1Head = sortedHead.next;
    let group2Head = sortedHead.next;
    let groupTail = sortedHead;

    // Merge adjacent groups of linked list nodes
    while (group1Head) {
      let groupCount = 0;

      // Get the second group of nodes to merge
      while (group2Head && groupCount < groupSize) {
        groupCount++;
        group2Head = group2Head.next;
      }

      // Merge the two groups of nodes
      let group1Used = 0;
      let group2Used = 0;
      while (
        group1Head && group1Used < groupSize ||
        group2Head && group2Used < groupSize
      ) {
        if (
          !group2Head ||
          group2Used >= groupSize ||
          group1Used < groupSize && group1Head.val < group2Head.val
        ) {
          groupTail.next = group1Head;
          group1Head = group1Head.next;
          group1Used++;
        } else {
          groupTail.next = group2Head;
          group2Head = group2Head.next;
          group2Used++;
        }
        groupTail = groupTail.next;
        count++;
      }

      // Move to the next group of nodes to merge
      group1Head = group2Head;
      groupTail.next = group2Head;
    }

    // Double the group size for the next round of merges
    groupSize *= 2;

    // Record the number of nodes in the linked list
    if (nodeCount === Infinity) nodeCount = count;
  }

  // Return the sorted linked list
  return sortedHead.next;
};

module.exports = sortList;
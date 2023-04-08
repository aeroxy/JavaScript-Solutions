# Intuition
The problem requires us to create a deep copy of the given linked list, which means we need to create a new linked list that has the same values as the original linked list but does not share any nodes or pointers with the original linked list. To accomplish this, we can iterate through the original linked list and create a new node for each node in the original linked list as well as its next pointer. We can then store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list using a `WeakMap`. We can then iterate through the new linked list and set the `random` pointer for each node based on the mapping.

# Approach
- We start by initializing a `WeakMap` to store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list.
- Then, we iterate through the original linked list, creating a new node for each node in the original linked list and storing the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list using the `WeakMap`.
- We iterate through the original linked list again to set the random pointer of the cloned nodes.
- Finally, we return the head of the new linked list.

# Complexity
- Time complexity: $$O(2*n)$$, where `n` is the number of nodes in the linked list. We need to iterate through the linked list twice, once to create the new nodes and another time to set the pointers of the cloned nodes.

- Space complexity: $$O(2*n)$$, where `n` is the number of nodes in the linked list. We need to store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list using a `WeakMap`. We also need to store the new linked list.

# Code
```js
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
```
# Intuition
The problem requires us to create a deep copy of the given linked list, which means we need to create a new linked list that has the same values as the original linked list but does not share any nodes or pointers with the original linked list. To accomplish this, we can iterate through the original linked list and create a new node for each node in the original linked list. We can then store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list using a `WeakMap`. We can then iterate through the new linked list and set the `next` and `random` pointers for each node based on the mapping.

# Approach
- We start by initializing a `WeakMap` to store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list.
- Then, we iterate through the original linked list, creating a new node for each node in the original linked list and storing the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list using the `WeakMap`.
- We iterate through the original linked list again to set the pointers of the cloned nodes.
- Finally, we return the head of the new linked list.

# Complexity
- Time complexity: $$O(n)$$, where `n` is the number of nodes in the linked list. We need to iterate through the linked list twice, once to create the new nodes and another time to set the pointers of the cloned nodes.

- Space complexity: $$O(n)$$, where `n` is the number of nodes in the linked list. We need to store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list using a `WeakMap`.

# Code
```js
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
```
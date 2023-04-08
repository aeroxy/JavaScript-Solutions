# Intuition
The problem requires us to create a deep copy of the given linked list, which means we need to create a new linked list that has the same values as the original linked list but does not share any nodes or pointers with the original linked list. To accomplish this, we can iterate through the original linked list and create a new node for each node in the original linked list. We can then store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list. We can then iterate through the new linked list and set the `next` and `random` pointers for each node based on the mapping.

# Approach
- We start by initializing the pointers and caches.
- Then, we iterate through the original linked list, creating a new node for each node in the original linked list and storing the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list in two different caches.
- We iterate through the original linked list again to find pointers and store them.
- We iterate through the cloned linked list again to set pointers.
- Finally, we return the head of the new linked list.

# Complexity
- Time complexity: $$O(2n+n^2)$$, where `n` is the number of nodes in the linked list. We need to iterate through the linked list three times, one of which we will search for the cache which would be a maxium of $$O(n^2)$$.
- Space complexity: $$O(4*n)$$, where `n` is the number of nodes in the linked list. We need to store the mapping between the nodes in the original linked list and their corresponding nodes in the new linked list, as well as the pointers of the original nodes.

# Code
```js
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
```
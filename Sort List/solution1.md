# Intuition
The problem asks us to sort a linked list in ascending order. One way to do this is to convert the linked list to an array, sort the array, and then convert the sorted array back to a linked list.

# Approach
We can convert the linked list to an array by iterating through the linked list and pushing each node into an array. Then, we can sort the array in ascending order using the `Array.sort()` method. Finally, we can convert the sorted array back to a linked list by iterating through the array and creating a new linked list by assigning the values in the array to the `val` property of each node and assigning the next node to the `next` property of the current node.

# Complexity
- Time complexity: $$O(n*log(n))$$ due to the use of the `Array.sort()` method.
- Space complexity: $$O(n)$$ due to the creation of an array to store the values of the linked list.

# Code
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr = arr.sort((a, b) => a.val - b.val);
  arr.forEach((node, index) => {
    node.next = arr[index + 1] ?? null;
  });
  return arr[0] ?? null;
};
```
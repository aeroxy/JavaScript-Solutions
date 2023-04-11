# Intuition
The problem asks us to sort a linked list in ascending order. One way to do this is to use a divide-and-conquer approach called merge sort.

# Approach
To apply merge sort to a linked list, we first split the linked list into two halves using the slow and fast pointers. We then recursively sort the two halves. Finally, we merge the two sorted halves by creating a new linked list and comparing the values of the two halves.

We start by defining a `sortList` function that takes in a linked list. If the linked list is empty or only has one node, we return the linked list. Otherwise, we split the linked list into two halves and recursively sort them by calling the `sortList` function on each half. We then merge the two sorted halves by creating a dummy node and iterating through the two halves. We compare the values of the two halves and add the smaller value to the new linked list. We continue this process until we have exhausted one of the two halves. Finally, we attach the remaining nodes to the new linked list and return the new linked list.

# Complexity
- Time complexity: $$O(n*log(n))$$ due to the use of the divide-and-conquer merge sort algorithm.
- Space complexity: $$O(log(n))$$ due to the use of recursion to sort the linked list.

# Code
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head?.next) {
    return head;
  }

  let slow = head;
  let fast = head.next;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;

  let sortedFirstHalf = sortList(head);
  let sortedSecondHalf = sortList(secondHalf);

  let dummy = new ListNode(0);
  let tail = dummy;

  while (sortedFirstHalf && sortedSecondHalf) {
    if (sortedFirstHalf.val < sortedSecondHalf.val) {
      tail.next = sortedFirstHalf;
      sortedFirstHalf = sortedFirstHalf.next;
    } else {
      tail.next = sortedSecondHalf;
      sortedSecondHalf = sortedSecondHalf.next;
    }
    tail = tail.next;
  }

  tail.next = sortedFirstHalf ?? sortedSecondHalf;

  return dummy.next;
};
```
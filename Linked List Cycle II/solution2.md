# Intuition
To detect a cycle in a linked list, we can use the Floyd's cycle detection algorithm (also known as the hare and tortoise algorithm). In this algorithm, we use two pointers - a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a cycle in the linked list, then the fast pointer will eventually catch up to the slow pointer.

Once we detect a cycle, we need to find the node where the cycle begins. To do this, we can use the following observation: if we start another pointer from the head of the linked list and move it one step at a time, and at the same time move the slow pointer one step at a time, then they will eventually meet at the node where the cycle begins.

# Approach
We start by initializing two pointers, `slow` and `fast`, both pointing to the head of the linked list. Then we iterate over the linked list using the `while` loop, moving `slow` one step at a time and `fast` two steps at a time. If there is no cycle in the linked list, then the `while` loop will terminate when `fast` reaches the end of the linked list, and we return `null`.

If there is a cycle, then the `while` loop will never terminate, and `slow` and `fast` will eventually meet at some node `N` in the cycle. We then initialize `fast` to point to the head of the linked list, and continue iterating over the linked list with both `slow` and `fast` moving one step at a time. The point where they meet again is the node where the cycle begins, and we return that node.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of nodes in the linked list. We need to iterate over the linked list twice at most.
- Space complexity: $$O(1)$$, we only use constant extra space for the two pointers.

# Code
```js
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next || !head.next.next) {
    return null;
  }
  let slow = head.next;
  let fast = head.next.next;
  while (slow !== fast) {
    if (!slow?.next || !fast?.next?.next) {
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  while (slow !== head) {
    slow = slow.next;
    head = head.next;
  }
  return head;
};
```
const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.equal(result, output);
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(arr, pos) {
  if (!arr.length) {
    return null;
  }

  const store = [];

  const head = new ListNode(arr[0]);
  let current = head;
  store.push(current);

  for (let i = 1; i < arr.length; ++i) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    store.push(current);
  }

  current.next = store[pos] ?? null;

  return head;
}

module.exports = {
  testCases: [
    () => expect(
      [
        createLinkedList([3,2,0,-4], 1),
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        createLinkedList([1,2], 0),
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        createLinkedList([1], -1),
      ],
      false,
      testMethod,
    ),
  ],
};

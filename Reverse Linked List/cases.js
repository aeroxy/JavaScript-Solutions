const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    linkedListToArray(method(...input)),
    output,
  );
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function arrayToLinkedList(arr) {
  if (!arr.length) {
    return null;
  }
  // create head node
  let head = new ListNode(arr[0]);
  let currentNode = head;
  
  // iterate through array and create linked list
  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    currentNode.next = newNode;
    currentNode = newNode;
  }
  
  return head;
}

function linkedListToArray(head) {
  let arr = [];
  let currentNode = head;
  
  // iterate through linked list and add data to array
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  
  return arr;
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToLinkedList([1,2,3,4,5]),
      ],
      [5,4,3,2,1],
      testMethod,
    ),
    () => expect(
      [
        arrayToLinkedList([1,2]),
      ],
      [2,1],
      testMethod,
    ),
    () => expect(
      [
        arrayToLinkedList([]),
      ],
      [],
      testMethod,
    ),
  ],
};

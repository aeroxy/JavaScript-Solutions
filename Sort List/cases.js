const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(linkedListToArray(result), output);
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (!arr.length) {
    return null;
  }
  // create head node
  let head = new Node(arr[0]);
  let currentNode = head;
  
  // iterate through array and create linked list
  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
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
        arrayToLinkedList([4, 2, 1, 3]),
      ],
      [1, 2, 3, 4],
      testMethod,
    ),
    () => expect(
      [
        arrayToLinkedList([1]),
      ],
      [1],
      testMethod,
    ),
    () => expect(
      [
        arrayToLinkedList([-1, 5, 3, 4, 0]),
      ],
      [-1, 0, 3, 4, 5],
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

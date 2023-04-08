const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(convertToList(result), output);
}

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function generateLinkedList(nodes) {
  const nodeMap = new Map();
  const dummy = new Node(0, null, null);
  let tail = dummy;
  for (let i = 0; i < nodes.length; i++) {
    const val = nodes[i][0];
    const node = new Node(val, null, null);
    tail.next = node;
    tail = node;
    nodeMap.set(i, node);
  }
  let current = dummy.next;
  for (let i = 0; i < nodes.length; i++) {
    const randomIndex = nodes[i][1];
    if (randomIndex !== null) {
      const newRandom = nodeMap.get(randomIndex);
      current.random = newRandom;
    }
    current = current.next;
  }
  return dummy.next;
}

function convertToList(head) {
  const nodes = [];
  const nodeMap = new Map();
  let current = head;
  let i = 0;
  while (current !== null) {
    nodes.push([current.val, null]);
    nodeMap.set(current, i);
    current = current.next;
    i++;
  }
  current = head;
  i = 0;
  while (current !== null) {
    const randomIndex = current.random !== null ? nodeMap.get(current.random) : null;
    nodes[i][1] = randomIndex;
    current = current.next;
    i++;
  }
  return nodes;
}

module.exports = {
  testCases: [
    () => expect(
      [
        generateLinkedList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]),
      ],
      [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]],
      testMethod,
    ),
    () => expect(
      [
        generateLinkedList([[1, 1], [2, 1]]),
      ],
      [[1, 1], [2, 1]],
      testMethod,
    ),
    () => expect(
      [
        generateLinkedList([[3, null], [3, 0], [3, null]]),
      ],
      [[3, null], [3, 0], [3, null]],
      testMethod,
    ),
  ],
};

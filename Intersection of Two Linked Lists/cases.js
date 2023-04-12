const expect = require("../test/expect");
const method = require("./solution3");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  return assert.deepEqual(result ? result.val : 0, output);
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedLists(listA, listB, skipA, skipB) {
  const nodeA = listA.map((val) => new ListNode(val));
  const nodeB = listB.map((val) => new ListNode(val));

  nodeA.forEach((node, index) => {
    node.next = nodeA[index + 1] ?? null;
  });

  nodeB.forEach((node, index) => {
    node.next = nodeB[index + 1] ?? null;
  });

  if (skipA !== listA.length && skipB !== listB.length) {
    nodeA[skipA - 1].next = nodeB[skipB];
  }

  return [
    nodeA[0],
    nodeB[0],
  ];
}

module.exports = {
  testCases: [
    () => expect(
      createLinkedLists(
        [4, 1, 8, 4, 5],
        [5, 6, 1, 8, 4, 5],
        2,
        3,
      ),
      8,
      testMethod,
    ),
    () => expect(
      createLinkedLists(
        [1, 9, 1, 2, 4],
        [3, 2, 4],
        3,
        1,
      ),
      2,
      testMethod,
    ),
    () => expect(
      createLinkedLists(
        [2, 6, 4],
        [1, 5],
        3,
        2,
      ),
      0,
      testMethod,
    ),
    () => expect(
      createLinkedLists(
        [2, 2, 4, 5, 4],
        [2, 2, 4, 5, 4],
        2,
        2,
      ),
      4,
      testMethod,
    ),
  ],
};

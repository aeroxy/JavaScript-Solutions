const expect = require("../test/expect");
const method = require("./solution1");
const assert = require("assert");

function testMethod(input, output) {
  return assert.equal(
    method(...input),
    output,
  );
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function arrayToList(arr) {
  const head = {};
  arr.reduce((acc, cur) => {
    acc.next = new ListNode(cur);
    return acc.next;
  }, head);
  return head.next;
}

module.exports = {
  testCases: [
    () => expect(
      [
        arrayToList([1,2,2,1]),
      ],
      true,
      testMethod,
    ),
    () => expect(
      [
        arrayToList([1,2]),
      ],
      false,
      testMethod,
    ),
  ],
};

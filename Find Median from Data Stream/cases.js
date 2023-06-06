const expect = require("../test/expect");
const MedianFinder = require("./solution2");
const assert = require("assert");

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
function testMethod(input, output) {
  const [method, args] = input;
  const result = [];
  let obj = null;
  for (let i = 0; i < method.length; ++i) {
    if (method[i] === 'MedianFinder') {
      obj = new MedianFinder(...args[i]);
      result.push(null);
    } else {
      result.push(
        obj[method[i]](...args[i]),
      );
    }
  }
  return assert.deepEqual(
    result,
    output,
  );
}

module.exports = {
  testCases: [
    () => expect(
      [
        ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
        [[], [1], [2], [], [3], []],
      ],
      [null, null, null, 1.5, null, 2.0],
      testMethod,
    ),
  ],
};

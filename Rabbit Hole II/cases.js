const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

function testMethod(input, output) {
  return assert.deepEqual(
    method(...input),
    output,
  );
}

module.exports = {
  testCases: [
    // Case 1: Example 1 from README
    // N = 4, M = 4, A = [1, 2, 3, 4], B = [4, 1, 2, 1]
    // Expected Return Value = 4
    () => expect(
      [
        4,
        4,
        [1, 2, 3, 4],
        [4, 1, 2, 1],
      ],
      4,
      testMethod,
    ),

    // Case 2: Example 2 from README
    // N = 5, M = 6, A = [3, 5, 3, 1, 3, 2], B = [2, 1, 2, 4, 5, 4]
    // Expected Return Value = 4
    () => expect(
      [
        5,
        6,
        [3, 5, 3, 1, 3, 2],
        [2, 1, 2, 4, 5, 4],
      ],
      4,
      testMethod,
    ),

    // Case 3: Example 3 from README
    // N = 10, M = 9, A = [3, 2, 5, 9, 10, 3, 3, 9, 4], B = [9, 5, 7, 8, 6, 4, 5, 3, 9]
    // Expected Return Value = 5
    () => expect(
      [
        10,
        9,
        [3, 2, 5, 9, 10, 3, 3, 9, 4],
        [9, 5, 7, 8, 6, 4, 5, 3, 9],
      ],
      5,
      testMethod,
    ),

    // Case 4: Simple linear chain
    // N = 3, M = 2, A = [1, 2], B = [2, 3]
    // Expected Return Value = 3 (1->2->3)
    () => expect(
      [
        3,
        2,
        [1, 2],
        [2, 3],
      ],
      3,
      testMethod,
    ),

    // Case 5: Single node with self-loop
    // N = 1, M = 1, A = [1], B = [1]
    // Expected Return Value = 1
    () => expect(
      [
        1,
        1,
        [1],
        [1],
      ],
      1,
      testMethod,
    ),

    // Case 6: Two disconnected components
    // Component 1: N=2, M=1, A=[1], B=[2]
    // Component 2: N=2, M=1, A=[3], B=[4]
    // Starting from node 1: can reach 2, total = 2
    // Starting from node 3: can reach 4, total = 2
    // Overall max = 2
    () => expect(
      [
        4,
        2,
        [1, 3],
        [2, 4],
      ],
      2,
      testMethod,
    ),

    // Case 7: Star graph (one central node)
    // N = 5, M = 4, A = [1, 1, 1, 1], B = [2, 3, 4, 5]
    // Starting from node 1: can visit only one of 2, 3, 4, 5 (longest simple path)
    // Path: 1 → 2 (or 1 → 3, 1 → 4, 1 → 5), total = 2
    () => expect(
      [
        5,
        4,
        [1, 1, 1, 1],
        [2, 3, 4, 5],
      ],
      2,
      testMethod,
    ),

    // Case 8: Cycle graph
    // N = 4, M = 4, A = [1, 2, 3, 4], B = [2, 3, 4, 1]
    // All nodes are reachable from any starting node, total = 4
    () => expect(
      [
        4,
        4,
        [1, 2, 3, 4],
        [2, 3, 4, 1],
      ],
      4,
      testMethod,
    ),

    // Case 9: Complex graph with multiple paths
    // N = 6, M = 8
    // A = [1, 1, 2, 3, 3, 4, 5, 6]
    // B = [2, 3, 4, 4, 5, 6, 1, 2]
    // Starting from node 1: can reach 1,2,3,4,5,6, total = 6
    () => expect(
      [
        6,
        8,
        [1, 1, 2, 3, 3, 4, 5, 6],
        [2, 3, 4, 4, 5, 6, 1, 2],
      ],
      6,
      testMethod,
    ),

    // Case 10: Large N with simple linear structure
    // N = 1000, M = 999, A = [1,2,...,999], B = [2,3,...,1000]
    // Starting from node 1: can reach all 1000 nodes
    () => expect(
      [
        1000,
        999,
        Array.from({length: 999}, (_, i) => i + 1),
        Array.from({length: 999}, (_, i) => i + 2),
      ],
      1000,
      testMethod,
    ),
  ],
};
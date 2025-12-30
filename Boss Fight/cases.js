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
    // N = 3, H = [2, 1, 4], D = [3, 1, 2], B = 4
    // Expected Return Value = 6.500000
    () => expect(
      [
        3,
        [2, 1, 4],
        [3, 1, 2],
        4,
      ],
      6.500000,
      testMethod,
    ),

    // Case 2: Example 2 from README
    // N = 4, H = [1, 1, 2, 100], D = [1, 2, 1, 3], B = 8
    // Expected Return Value = 62.750000
    () => expect(
      [
        4,
        [1, 1, 2, 100],
        [1, 2, 1, 3],
        8,
      ],
      62.750000,
      testMethod,
    ),

    // Case 3: Example 3 from README
    // N = 4, H = [1, 1, 2, 3], D = [1, 2, 1, 100], B = 8
    // Expected Return Value = 62.750000
    () => expect(
      [
        4,
        [1, 1, 2, 3],
        [1, 2, 1, 100],
        8,
      ],
      62.750000,
      testMethod,
    ),

    // Case 4: Two warriors with same stats
    // N = 2, H = [10, 10], D = [5, 5], B = 2
    // Front line survives 5 seconds: both deal 5*5=25 each, total 50
    // Backup survives 5 seconds: deals 5*5=25, total 75
    () => expect(
      [
        2,
        [10, 10],
        [5, 5],
        2,
      ],
      75.0,
      testMethod,
    ),

    // Case 5: High damage low health vs low damage high health
    // N = 2, H = [1, 100], D = [100, 1], B = 10
    // Option 1: w0 frontline, w1 backup = 20.1 damage
    // Option 2: w1 frontline, w0 backup = 1020 damage (optimal)
    () => expect(
      [
        2,
        [1, 100],
        [100, 1],
        10,
      ],
      1020.0,
      testMethod,
    ),

    // Case 6: Minimal case - N = 2
    // N = 2, H = [1, 1], D = [1, 1], B = 1
    // Front line survives 1 second: both deal 1 damage each, total 2
    // Backup survives 1 second: deals 1 damage, total 3
    () => expect(
      [
        2,
        [1, 1],
        [1, 1],
        1,
      ],
      3.0,
      testMethod,
    ),

    // Case 7: Edge case - warriors not in top of any single metric but optimal as pair
    // N = 5, H = [10, 20, 30, 40, 50], D = [50, 40, 30, 20, 10], B = 10
    // Warriors 0 and 4: H[0]=10, D[0]=50, H[4]=50, D[4]=10
    // Frontline 4, backup 0: (50*(50+10) + 10*10)/10 = (3000 + 100)/10 = 310
    // Frontline 0, backup 4: (10*(50+10) + 50*50)/10 = (600 + 2500)/10 = 310
    // Actually: Pair (0,4) with 4 frontline, 0 backup = 350
    () => expect(
      [
        5,
        [10, 20, 30, 40, 50],
        [50, 40, 30, 20, 10],
        10,
      ],
      350.0,
      testMethod,
    ),

    // Case 8: Large numbers to test precision
    // N = 2, H = [1000000000, 1000000000], D = [1000000000, 1000000000], B = 1000000000
    // Frontline survives 1 second: both deal 10^9 damage each
    // Backup survives 1 second: deals 10^9 damage
    // Total: 3 * 10^9
    () => expect(
      [
        2,
        [1000000000, 1000000000],
        [1000000000, 1000000000],
        1000000000,
      ],
      3000000000.0,
      testMethod,
    ),

    // Case 9: N = 3 with specific pattern
    // N = 3, H = [5, 10, 15], D = [15, 10, 5], B = 5
    // Check all pairs
    () => expect(
      [
        3,
        [5, 10, 15],
        [15, 10, 5],
        5,
      ],
      75.0,
      testMethod,
    ),
  ],
};

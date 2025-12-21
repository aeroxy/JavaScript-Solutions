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
    // N = 5, S = [1, 2, 3, 4, 5]
    // Minimum problems needed: 3 (e.g., [1, 1, 3])
    () => expect(
      [
        5,
        [1, 2, 3, 4, 5],
      ],
      3,
      testMethod,
    ),

    // Case 2: Example 2 from README
    // N = 4, S = [4, 3, 3, 4]
    // Minimum problems needed: 2 (e.g., [1, 3])
    () => expect(
      [
        4,
        [4, 3, 3, 4],
      ],
      2,
      testMethod,
    ),

    // Case 3: Example 3 from README
    // N = 4, S = [2, 4, 6, 8]
    // Minimum problems needed: 4 (e.g., [2, 2, 2, 2])
    () => expect(
      [
        4,
        [2, 4, 6, 8],
      ],
      4,
      testMethod,
    ),

    // Case 4: Example 4 from README
    // N = 1, S = [8]
    // Minimum problems needed: 3 (e.g., [2, 3, 3])
    () => expect(
      [
        1,
        [8],
      ],
      3,
      testMethod,
    ),

    // Case 5: Single competitor with score 1
    // N = 1, S = [1]
    // Minimum problems needed: 1 (e.g., [1])
    () => expect(
      [
        1,
        [1],
      ],
      1,
      testMethod,
    ),

    // Case 6: Single competitor with score 3
    // N = 1, S = [3]
    // Minimum problems needed: 1 (e.g., [3])
    () => expect(
      [
        1,
        [3],
      ],
      1,
      testMethod,
    ),

    // Case 7: Multiple competitors with same score
    // N = 3, S = [5, 5, 5]
    // Minimum problems needed: 2 (e.g., [2, 3])
    () => expect(
      [
        3,
        [5, 5, 5],
      ],
      2,
      testMethod,
    ),

    // Case 8: Large scores
    // N = 2, S = [1000000000, 999999999]
    // Minimum problems needed: ceil(1000000000/3) = 333333334
    () => expect(
      [
        2,
        [1000000000, 999999999],
      ],
      333333334,
      testMethod,
    ),

    // Case 9: All scores achievable with 1-point problems
    // N = 3, S = [1, 2, 3]
    // Minimum problems needed: 2 (e.g., [1, 2])
    // [1, 2] works: 1=1, 2=2, 3=1+2
    // So answer is 2
    () => expect(
      [
        3,
        [1, 2, 3],
      ],
      2,
      testMethod,
    ),

    // Case 10: Scores that need only 2-point problems
    // N = 3, S = [2, 4, 6]
    // Minimum problems needed: 3 (e.g., [2, 2, 2])
    () => expect(
      [
        3,
        [2, 4, 6],
      ],
      3,
      testMethod,
    ),

    // Case 11: Mixed requirements
    // N = 3, S = [1, 3, 5]
    // Minimum problems needed: 3
    // {1, 2, 3} works: 1=1, 3=3, 5=2+3
    // {1, 4} missing 3, {2, 3} missing 1.
    () => expect(
      [
        3,
        [1, 3, 5],
      ],
      3,
      testMethod,
    ),

    // Case 12: Score of 6
    // N = 1, S = [6]
    // Minimum problems needed: 2 (e.g., [3, 3])
    () => expect(
      [
        1,
        [6],
      ],
      2,
      testMethod,
    ),

    // Case 13: Score of 7
    // N = 1, S = [7]
    // Minimum problems needed: 3 (e.g., [2, 2, 3])
    () => expect(
      [
        1,
        [7],
      ],
      3,
      testMethod,
    ),

    // Case 14: Score of 9
    // N = 1, S = [9]
    // Minimum problems needed: 3 (e.g., [3, 3, 3])
    () => expect(
      [
        1,
        [9],
      ],
      3,
      testMethod,
    ),

    // Case 15: Edge case - all scores are 1
    // N = 5, S = [1, 1, 1, 1, 1]
    // Minimum problems needed: 1 (e.g., [1])
    () => expect(
      [
        5,
        [1, 1, 1, 1, 1],
      ],
      1,
      testMethod,
    ),

    // Case 16: Strategy 5 winner
    // N = 3, S = [2, 4, 7]
    // Minimum problems needed: 3 ({2, 2, 3})
    // 2=2, 4=2+2, 7=2+2+3
    () => expect(
      [
        3,
        [2, 4, 7],
      ],
      3,
      testMethod,
    ),

    // Case 17: Strategy 5 winner with multiple values
    // N = 4, S = [2, 4, 6, 7]
    // Minimum problems needed: 4
    // {2, 2, 3} cannot make 6. Needs {2, 2, 3, 3} or similar.
    () => expect(
      [
        4,
        [2, 4, 6, 7],
      ],
      4,
      testMethod,
    ),

    // Case 18: Strategy 5 winner with larger scores
    // N = 3, S = [2, 7, 10]
    // Minimum problems needed: 4 ({2, 2, 3, 3})
    // 2=2, 7=2+2+3, 10=2+2+3+3
    () => expect(
      [
        3,
        [2, 7, 10],
      ],
      4,
      testMethod,
    ),

    // Case 19: Small numbers edge case for "Two 2s"
    // N = 2, S = [2, 4]
    // Needs 1 (from 4) and 2 (from 2). No literal 1.
    // {1, 2}: Sum 3. Missing 1 to reach 4. Total {1, 2, 1} or {1, 2, 3} -> 3.
    // {2, 2}: Sum 4. Covers 2 and 4. Total {2, 2} -> 2.
    () => expect(
      [
        2,
        [2, 4],
      ],
      2,
      testMethod,
    ),

    // Case 20: Small numbers needing 1 and 2, with literal 1
    // N = 2, S = [1, 5]
    // Needs 1, 2. Has 1.
    // {1, 2}: Sum 3. To get 5, need 2 more. {1, 2, 3} -> 3.
    () => expect(
      [
        2,
        [1, 5],
      ],
      3,
      testMethod,
    ),

    // Case 21: Needs only 2, small gap
    // N = 2, S = [2, 5]
    // Needs 2.
    // {2}: Sum 2. To get 5, need 3. {2, 3} -> 2.
    () => expect(
      [
        2,
        [2, 5],
      ],
      2,
      testMethod,
    ),

    // Case 22: Needs 1 and 2, no literal 1 or 2
    // N = 2, S = [4, 5]
    // Needs 1 (4), 2 (5).
    // {1, 2}: Sum 3. To get 5, need 2. {1, 2, 3} -> 3.
    // {2, 2}: Sum 4. To get 5, need 1. {2, 2, 3} -> 3.
    // Both 3.
    () => expect(
      [
        2,
        [4, 5],
      ],
      3,
      testMethod,
    ),

    // Case 23: Large consecutive sequence needing all residues
    // N = 3, S = [100, 101, 102]
    // Max 102.
    // {3...3} (34 items) sum 102. But can't make 100, 101.
    // Need residues.
    // {1, 2} + 33*3. Sum 3 + 99 = 102. Count 35.
    () => expect(
      [
        3,
        [100, 101, 102],
      ],
      35,
      testMethod,
    ),

    // Case 24: Basic [1, 2]
    // Minimum problems needed: 2 ({1, 2})
    () => expect(
      [
        2,
        [1, 2],
      ],
      2,
      testMethod,
    ),

    // Case 25: Sequence 1-6
    // S = [1, 2, 3, 4, 5, 6]
    // Max 6. Needs 1, 2. Has 1.
    // {1, 2, 3} -> 3.
    () => expect(
      [
        6,
        [1, 2, 3, 4, 5, 6],
      ],
      3,
      testMethod,
    ),

    // Case 26: Large max with all residues
    // S = [1, 2, 1000000000]
    // 1000000000 % 3 = 1.
    // Needs 1, 2. Has 1.
    // {1, 2} + 333333333*3 = 1000000001 (overshoot)
    // Actually, calcCost(2, 3) for 10^9: 2 + ceil(999999997/3) = 2 + 333333333 = 333333335.
    () => expect(
      [
        3,
        [1, 2, 1000000000],
      ],
      333333335,
      testMethod,
    ),

    // Case 27: Large max with only residue 1, but literal 2
    // S = [2, 1000000000]
    // Needs 1, 2. No literal 1.
    // {2, 2} + 333333332*3 = 4 + 999999996 = 1000000000.
    // Count: 2 + 333333332 = 333333334.
    () => expect(
      [
        2,
        [2, 1000000000],
      ],
      333333334,
      testMethod,
    ),

    // Case 28: Small score with only residue 2
    // S = [2, 3]
    () => expect(
      [
        2,
        [2, 3],
      ],
      2,
      testMethod,
    ),

    // Case 29: Small score with only residue 1
    // S = [1, 3]
    () => expect(
      [
        2,
        [1, 3],
      ],
      2,
      testMethod,
    ),

    // Case 30: Mixed residues, max is 6
    // S = [1, 5, 6]
    // {1, 2, 3} -> 3.
    () => expect(
      [
        3,
        [1, 5, 6],
      ],
      3,
      testMethod,
    ),

    // Case 31: The "2, 2" trap with 3
    // S = [2, 3, 4]
    // Needs 1 (4), 2 (2). Has 3.
    // {2, 2} sums to 4. Cannot make 3.
    // {1, 2} sums to 3. Can make 1, 2, 3.
    // {1, 2} + 3 = {1, 2, 3} (if needed for larger).
    // For max 4:
    // {1, 2} (sum 3). Need 1 more. {1, 2, 1}? No {1, 2, 3}. Sum 6.
    // {1, 2, 3} makes 1, 2, 3, 4(1+3), 5(2+3), 6.
    // Answer should be 3.
    // If code returns 2 ({2, 2}), it is wrong.
    () => expect(
      [
        3,
        [2, 3, 4],
      ],
      3,
      testMethod,
    ),

    // Case 32: The "2, 2" trap with a multiple of 3 (6)
    // S = [2, 6, 7]
    // Needs 1 (7), 2 (2). No literal 1.
    // {2, 2, 3} -> 2, 4, 5, 7. Missing 6.
    // {2, 3, 3} -> 2, 3, 5, 6, 8. Missing 7.
    // {1, 2, 3} -> 1, 2, 3, 4, 5, 6. Missing 7.
    // Needs 4 problems (e.g. {2, 2, 3, ?} or {1, 2, 3, 1}).
    () => expect(
      [
        3,
        [2, 6, 7],
      ],
      4,
      testMethod,
    ),

    // Case 33: Multiple of 3 with 1-residue
    // S = [6, 7]
    // {1, 3, 3} -> 1, 3, 4, 6, 7.
    // Size 3.
    () => expect(
      [
        2,
        [6, 7],
      ],
      3,
      testMethod,
    ),

    // Case 34: Large multiple of 3 where {2, 2} optimization is invalid
    // S = [2, 4, 999999999]
    // Needs 1 (4), 2 (2). No literal 1 or 3.
    // {2, 2} cost: 333333335 (needs an extra 3 for the mod 0).
    // {1, 2} cost: 333333334.
    // Correct Answer: 333333334.
    () => expect(
      [
        3,
        [2, 4, 999999999],
      ],
      333333334,
      testMethod,
    ),

    // Case 35: Another residue 1 and 2 combo with multiple of 3
    // S = [2, 4, 9]
    // {2, 2} cost: 2 + ceil(5/3) = 4. ({2, 2, 3, 3})
    // {1, 2} cost: 2 + ceil(6/3) = 4. ({1, 2, 3, 3})
    () => expect(
      [
        3,
        [2, 4, 9],
      ],
      4,
      testMethod,
    ),
  ],
};

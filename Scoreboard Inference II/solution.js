/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */
function getMinProblemCount(N, S) {
  let maxScore = 0;
  let maxMod0 = 0;
  let needsOne = false;
  let needsTwo = false;
  let hasOne = false;

  for (let i = 0; i < N; ++i) {
    const score = S[i];
    maxScore = Math.max(maxScore, score);
    if (score % 3 === 0) maxMod0 = Math.max(maxMod0, score);
    if (score % 3 === 1) needsOne = true;
    if (score % 3 === 2) needsTwo = true;
    if (score === 1) hasOne = true;
  }

  // Case 0: No residues needed
  if (!needsOne && !needsTwo) {
    return maxScore / 3;
  }

  const getCost = (baseCount, baseSum) => {
    // 1. Cost to reach maxScore
    const remaining = maxScore - baseSum;
    const costForMax = baseCount + (remaining > 0 ? Math.ceil(remaining / 3) : 0);

    // 2. Cost to reach maxMod0 (largest multiple of 3)
    // If the base contains ANY residues (sum % 3 != 0), we can't use them to help forming multiples of 3.
    // We must rely entirely on the '3's we add.
    // Exception: If baseSum IS a multiple of 3 (e.g. {3}), it contributes.
    // But our strategies are {1}, {2}, {1,2}, {2,2}.
    // {1}, {2}, {1,2} (sum 3), {2,2} (sum 4).
    
    // Actually simpler:
    // If we use strategies with residues ({1}, {2}, {2,2}), they "pollute" the sum with residues.
    // To make a clean multiple of 3, we must use ONLY the 3s (and potentially a sub-part of base if it sums to 0 mod 3).
    
    // Strategy {1} (sum 1): Cannot help make mod 0. Need ceil(maxMod0/3) threes. Total = 1 + maxMod0/3.
    // Strategy {2} (sum 2): Cannot help. Total = 1 + maxMod0/3.
    // Strategy {1, 2} (sum 3): The {1, 2} part sums to 3. It acts like a '3'.
    //    So we have a "free" 3. Effectively we just need enough sum to reach maxMod0.
    //    Since {1, 2} sums to 3, it's perfect. The standard formula covers it.
    //    (remaining logic covers it naturally).
    
    // Strategy {2, 2} (sum 4): 4 is NOT 0 mod 3.
    //    So the two 2s cannot be used to make a multiple of 3.
    //    We need separate 3s for maxMod0.
    //    Total = 2 + (maxMod0 / 3).
    
    let costForMod0 = 0;
    if (baseSum % 3 !== 0) {
       costForMod0 = baseCount + (maxMod0 / 3);
    }
    
    return Math.max(costForMax, costForMod0);
  };

  let ans = Infinity;

  // Strategy A: {1, 2} (Standard)
  // Valid if we need 1 and 2. Or just 1. Or just 2. It's the "safe" strategy.
  // Base: {1, 2}, Sum: 3.
  // Since 3 % 3 === 0, it naturally handles maxMod0 constraint via standard sum check.
  ans = Math.min(ans, getCost(2, 3));

  // Strategy B: {1}
  // Valid only if we DON'T need 2s.
  if (needsOne && !needsTwo) {
    ans = Math.min(ans, getCost(1, 1));
  }

  // Strategy C: {2}
  // Valid only if we DON'T need 1s.
  if (!needsOne && needsTwo) {
    ans = Math.min(ans, getCost(1, 2));
  }

  // Strategy D: {2, 2} (Two 2s Optimization)
  // Valid if we need 1s (covered by 2+2=4), but NO literal 1 exists.
  // Also valid for 2s residue.
  // Valid replacement for Strategy A when !hasOne.
  if (needsOne && !hasOne) {
    ans = Math.min(ans, getCost(2, 4));
  }

  return ans;
}

module.exports = getMinProblemCount;
/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */
function getMinCodeEntryTime(N, M, C) {
  const getDist = (a, b) => {
    const dist = Math.abs(a - b);
    return dist < N - dist ? dist : N - dist;
  };

  // dp[j] = min cost with passive at C[j]
  // Valid values only exist for indices 0..maxValidJ
  const dp = new Float64Array(M);
  let maxValidJ = -1; // No valid entries initially

  // cost when passive remains at position 1
  let costPassiveAtStart = 0;

  for (let i = 0; i < M; ++i) {
    const cur = C[i];
    const prev = i === 0 ? 1 : C[i - 1];
    const activeMove = getDist(prev, cur);

    // 1. Switch from start (1)
    let minSwitchCost = costPassiveAtStart + getDist(1, cur);

    // 2. Switch from a previous state (dp[j])
    // Only iterate over j with valid dp entries
    for (let j = 0; j <= maxValidJ; ++j) {
      const currentCost = dp[j];

      // Switch: move passive (at C[j]) to cur
      const switchCost = currentCost + getDist(C[j], cur);
      if (switchCost < minSwitchCost) {
        minSwitchCost = switchCost;
      }

      // No switch: move active, passive stays at C[j]
      dp[j] = currentCost + activeMove;
    }

    // Update passive-at-start cost (passive didn't move)
    costPassiveAtStart += activeMove;

    // Save switch result to dp[i-1] (passive now at prev position)
    if (i > 0) {
      dp[i - 1] = minSwitchCost;
      maxValidJ = i - 1;
    }
  }

  // Final answer: min of start case and all valid dp entries
  let result = costPassiveAtStart;
  for (let j = 0; j <= maxValidJ; ++j) {
    if (dp[j] < result) {
      result = dp[j];
    }
  }

  return result;
}

module.exports = getMinCodeEntryTime;
/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */
function getMinCodeEntryTime(N, M, C) {
  const getDistance = (a, b) => {
    const dist = Math.abs(a - b);
    return Math.min(dist, N - dist);
  }

  // This stores the minimum time to have reached the current target(C[i])
  // with the passive lock positioned at C[j]
  const minTimeWithPassiveLockAt = new Float64Array(M - 1);
  // when i is 0, lastValidPassivePositionIdx should be -2
  // when i is 1, lastValidPassivePositionIdx should be -1
  // when i is 2, lastValidPassivePositionIdx should be 0
  let lastValidPassivePositionIdx = -2;

  let curMinTimeWithRightLockAtPosition1 = 0;
  let curActivePosition = 1;
  // Iterate through codes
  for (let i = 0; i < M; ++i) {
    const targetPos = C[i];
    const potentialTravelDistanceForActiveLock = getDistance(curActivePosition, targetPos);

    // This case is when we only move the left lock
    const minTimeAfterOnlyMovingLeftLock = curMinTimeWithRightLockAtPosition1 + getDistance(1, targetPos);

    let minTimeInThisRound = minTimeAfterOnlyMovingLeftLock;

    // This case is when we move both locks
    for (let j = 0; j <= lastValidPassivePositionIdx; ++j) {
      const minTimeToHaveReachedCurrentTarget = minTimeWithPassiveLockAt[j];

      // Now we have two choices:
      // Choice 1: Switch the passive lock to the current target position
      // And the active lock (at position C[i-1]) will become the passive lock
      const timeForSwitchingTheLock = minTimeToHaveReachedCurrentTarget + getDistance(C[j], targetPos);
      if (timeForSwitchingTheLock < minTimeInThisRound) {
        minTimeInThisRound = timeForSwitchingTheLock;
      }

      // Choice 2: Move the active lock to the current target position
      // So we update the dp storage for the passive lock positioned at C[j]
      minTimeWithPassiveLockAt[j] = minTimeToHaveReachedCurrentTarget + potentialTravelDistanceForActiveLock;
    }

    // Update the cost for the right lock to stay at position 1:
    curMinTimeWithRightLockAtPosition1 += potentialTravelDistanceForActiveLock;

    // After moving the passive lock to C[i] (if we do so)
    // the lock that was previously at C[i-1] could now be considered
    // a passive lock for future steps, so we should update its
    // minimum time to have reached the current target
    // which is:
    // 1. the new passive lock has never been moved until now (min time: minTimeAfterOnlyMovingLeftLock)
    // 2. the new passive lock has been moved (min time: minimum number of timeForSwitchingTheLock in different possible turns)
    // the minimum is thus "minTimeInThisRound"
    if (i !== 0) {
      minTimeWithPassiveLockAt[i - 1] = minTimeInThisRound;
    }
    // we also need to update the lastValidPassivePositionIdx at the end of the loop
    ++lastValidPassivePositionIdx;
    // and the new active position will be the target position in the next loop
    curActivePosition = targetPos;
  }

  // The final answer is to find the minimal time in
  // [curMinTimeWithRightLockAtPosition1, ...minTimeWithPassiveLockAt] 
  console.log(curMinTimeWithRightLockAtPosition1, minTimeWithPassiveLockAt)
  return Math.min(
    curMinTimeWithRightLockAtPosition1,
    Math.min.apply(null, minTimeWithPassiveLockAt)
  );
}

module.exports = getMinCodeEntryTime;

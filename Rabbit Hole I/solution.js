
/**
 * @param {number} N
 * @param {number[]} L
 * @return {number}
 */
function getMaxVisitableWebpages(N, L) {
  // Write your code here
  // memo[i] stores the max unique visits of page L[i]
  const memo = new Int32Array(N);
  // pathIdx[i] stores the position (+1) of page L[i] in a road
  const pathIdx = new Int32Array(N);

  let globalMax = 0;

  for (let i = 0; i < N; ++i) {
    if (memo[i]) {
      continue;
    }

    const path = [];
    let cur = i;

    // Follow the clicks unless:
    // A: we noticed we can just calc the result with existing max unique visits in this page
    // B: we have already been to this page (in a loop)
    while (!memo[cur] && !pathIdx[cur]) {
      pathIdx[cur] = path.length + 1; // nth page visit in this surf when we open this page (would be 1 from the start)
      path.push(cur); // document the path with current page id
      cur = L[cur] - 1; // the next page id on the page is always +1 (start from 1, instead of 0)
    }

    // Now we need to process the path saved:
    if (memo[cur]) {
      // If we noticed we can just calc the result with existing max unique visits in this page
      let curLen = memo[cur];
      // We can now go back page to page to update the max unique visits of pages we visited
      for (let j = path.length - 1; j >= 0; --j) {
        const pageId = path[j];
        ++curLen;
        memo[pageId] = curLen;
        pathIdx[pageId] = 0; // pathIdx will be reused, so we revert the record back to 0
      }
    } else {
      // This is when we have discovered a loop
      // For example, on the 3rd step we entered the loop, then the first step in the loop is 3
      // B/C we just discovered that we are in a loop, thus last time when we visited this page
      // the step we saved would be the first step
      const firstStepInTheLoop = pathIdx[cur];
      // We need to -1 to convert step to idx since step starts at 0, and idx starts at 1
      // e.g. if idx 1 and idx 2 is a loop, the loop size is 2 (3 - 2 + 1)
      const loopLen = path.length - firstStepInTheLoop + 1;

      // Now inside a loop, whichever page can visit uniquely exact the size of the loop of pages
      // We need to -1 to convert step to idx since step starts at 0, and idx starts at 1
      for (let j = firstStepInTheLoop - 1; j < path.length; ++j) {
        const pageId = path[j];
        memo[pageId] = loopLen;
        pathIdx[pageId] = 0; // pathIdx will be reused, so we revert the record back to 0
      }

      let curLen = loopLen;
      // Now before the loop, the max unique visits shall be:
      // steps before the loop + size of the loop
      // B/C step starts at 0, and idx starts at 1 so
      // the prev idx of firstStepInTheLoop is firstStepInTheLoop - 2
      for (let j = firstStepInTheLoop - 2; j >= 0; --j) {
        const pageId = path[j];
        ++curLen;
        memo[pageId] = curLen;
        pathIdx[pageId] = 0; // pathIdx will be reused, so we revert the record back to 0
      }
    }

    // Update global maximum
    if (memo[i] > globalMax) {
      globalMax = memo[i];
    }
  }
  return globalMax;
}

module.exports = getMaxVisitableWebpages;
/**
 * @param {number} N - number of warriors
 * @param {number[]} H - array of health values for each warrior (H[i] is health of ith warrior)
 * @param {number[]} D - array of damage per second values for each warrior (D[i] is DPS of ith warrior)
 * @param {number} B - boss damage per second
 * @return {number} - maximum damage that can be dealt by choosing optimal pair of warriors
 */
function getMaxDamageDealt(N, H, D, B) {
  // We need to coordinate compress D values because the Li Chao Tree 
  // works on a bounded range of coordinates. The values of D can be up to 10^9.
  // We sort unique D values and map each D[i] to its rank (index in uniqueD).

  // Create a copy of D and sort it to find unique values.
  // Using Float64Array for numeric sort efficiency.
  const sortedD = Float64Array.from(D).sort((a, b) => a - b);

  // Filter unique values
  let mCount = 0;
  const uniqueD = new Float64Array(sortedD.length);
  if (sortedD.length > 0) {
    uniqueD[0] = sortedD[0];
    mCount = 1;
    for (let i = 1; i < sortedD.length; i++) {
      if (sortedD[i] !== sortedD[i - 1]) {
        uniqueD[mCount++] = sortedD[i];
      }
    }
  }

  // The number of unique discrete points for the Li Chao Tree
  const M = mCount;

  // Helper to find the rank of a value in uniqueD using binary search
  function getRank(val) {
    let l = 0, r = M - 1;
    while (l <= r) {
      let mid = (l + r) >>> 1;
      let midVal = uniqueD[mid];
      if (midVal === val) return mid;
      if (midVal < val) l = mid + 1;
      else r = mid - 1;
    }
    return -1;
  }

  // Precompute ranks for all warriors to avoid repeated searches during the main loops
  const ranks = new Int32Array(N);
  for (let i = 0; i < N; i++) {
    ranks[i] = getRank(D[i]);
  }

  // Precompute intercepts for the lines associated with each warrior.
  // Line i: y = H[i] * x + C[i], where C[i] = H[i] * D[i]
  // Slopes are just H[i], so we use H array directly to save memory.
  const intercepts = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    intercepts[i] = H[i] * D[i];
  }

  // Li Chao Tree Implementation
  // The tree array stores the index of the line that is best at the midpoint of the node's range.
  // Size is 4 * M. Initialize with -1 (no line).
  const tree = new Int32Array(4 * M).fill(-1);

  // Evaluates line `lineIdx` at the coordinate corresponding to `xRank`.
  function evalLine(lineIdx, xRank) {
    if (lineIdx === -1) return -Infinity;
    return H[lineIdx] * uniqueD[xRank] + intercepts[lineIdx];
  }

  // Inserts a new line (by index) into the Li Chao Tree covering range [leftBound, rightBound]
  function insert(node, leftBound, rightBound, newLineIndex) {
    let currentLineIndex = tree[node];
    if (currentLineIndex === -1) {
      tree[node] = newLineIndex;
      return;
    }

    let midPoint = (leftBound + rightBound) >>> 1;
    // Compare values at midpoint to determine which line dominates this range
    let newLineValueAtMid = evalLine(newLineIndex, midPoint);
    let currentLineValueAtMid = evalLine(currentLineIndex, midPoint);

    // If new line is better at midpoint, it dominates this range
    if (newLineValueAtMid > currentLineValueAtMid) {
      tree[node] = newLineIndex;
      newLineIndex = currentLineIndex; // Old line goes to subtree
    }

    if (leftBound === rightBound) return;

    // Check edges to determine where the "losing" line might dominate in subranges
    let newLineValueAtLeft = evalLine(newLineIndex, leftBound);
    let currentLineValueAtLeft = evalLine(tree[node], leftBound);

    if (newLineValueAtLeft > currentLineValueAtLeft) {
      // Intersection in left half - losing line might dominate there
      insert(node * 2, leftBound, midPoint, newLineIndex);
    } else {
      // Check right half
      let newLineValueAtRight = evalLine(newLineIndex, rightBound);
      let currentLineValueAtRight = evalLine(tree[node], rightBound);
      if (newLineValueAtRight > currentLineValueAtRight) {
        // Intersection in right half
        insert(node * 2 + 1, midPoint + 1, rightBound, newLineIndex);
      }
    }
  }

  // Queries the maximum value at xRank
  // node: current tree node index
  // leftBound, rightBound: range this node represents [leftBound, rightBound]
  // queryPoint: the x-coordinate (rank) we're querying at
  function query(node, leftBound, rightBound, queryPoint) {
    if (leftBound > queryPoint || rightBound < queryPoint) return -Infinity;

    let currentNodeValue = evalLine(tree[node], queryPoint);
    if (leftBound === rightBound) return currentNodeValue;

    let midPoint = (leftBound + rightBound) >>> 1;
    if (queryPoint <= midPoint) {
      return Math.max(currentNodeValue, query(node * 2, leftBound, midPoint, queryPoint));
    } else {
      return Math.max(currentNodeValue, query(node * 2 + 1, midPoint + 1, rightBound, queryPoint));
    }
  }

  let maxTotalDamage = 0;

  // Pass 1: Consider pairs (i, j) where i < j.
  // We iterate j from 0 to N-1. For each j, we query the tree (containing lines 0 to j-1)
  // and then add line j to the tree.
  for (let j = 0; j < N; j++) {
    let bestPrev = query(1, 0, M - 1, ranks[j]);
    if (bestPrev !== -Infinity) {
      // bestPrev is max(H[i]*D[j] + C[i])
      // Total S(i, j) = bestPrev + C[j]
      let currentTotal = bestPrev + intercepts[j];
      if (currentTotal > maxTotalDamage) maxTotalDamage = currentTotal;
    }
    insert(1, 0, M - 1, j);
  }

  // Reset tree for the second pass
  tree.fill(-1);

  // Pass 2: Consider pairs (i, j) where i > j.
  // We iterate j from N-1 to 0. For each j, we query (containing lines j+1 to N-1)
  // and then add line j.
  for (let j = N - 1; j >= 0; j--) {
    let bestPrev = query(1, 0, M - 1, ranks[j]);
    if (bestPrev !== -Infinity) {
      let currentTotal = bestPrev + intercepts[j];
      if (currentTotal > maxTotalDamage) maxTotalDamage = currentTotal;
    }
    insert(1, 0, M - 1, j);
  }

  // The calculated maxTotalDamage corresponds to the numerator of the formula.
  // We must divide by B to get the actual damage.
  return maxTotalDamage / B;
}

module.exports = getMaxDamageDealt;
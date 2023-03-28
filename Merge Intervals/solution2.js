/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals = intervals.sort(([a], [b]) => a - b);
  let j = 0
  let i = 1;
  while (i < intervals.length) {
    const [, jEnd] = intervals[j];
    const [iStart, iEnd] = intervals[i];
    if (iStart <= jEnd) {
      intervals[j][1] = Math.max(jEnd, iEnd);
      intervals.splice(i, 1);
    } else {
      ++i;
      ++j;
    }
  }
  return intervals;
}

module.exports = merge;
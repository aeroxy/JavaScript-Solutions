/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  let i = 1;
  while (i < intervals.length) {
    for (let j = 0; j < i; ++j) {
      const [jStart, jEnd] = intervals[j];
      const [iStart, iEnd] = intervals[i];
      if (
        (jStart >= iStart && jStart <= iEnd) || 
        (jEnd >= iStart && jEnd <= iEnd) ||
        (jStart <= iStart && jEnd >= iStart)
      ) {
        intervals[j][0] = Math.min(jStart, iStart);
        intervals[j][1] = Math.max(jEnd, iEnd);
        intervals.splice(i, 1);
        i = 0;
        break;
      }
    }
    ++i;
  }
  return intervals;
}

module.exports = merge;
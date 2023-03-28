/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length === 0) return [];

  return intervals.sort(
    ([a], [b]) => a - b
  ).reduce(
    (acc, cur) => {
      const last = acc[acc.length - 1];
      if (cur[0] <= last[1]) {
        last[1] = Math.max(last[1], cur[1]);
      } else {
        acc.push(cur);
      }
      return acc;
    }, 
    [intervals[0]],
  );
}

module.exports = merge;
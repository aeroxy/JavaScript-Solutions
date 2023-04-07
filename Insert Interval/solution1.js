/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  let inserted = false;
  for (let i = 0; i < intervals.length;) {
    const [thisStart, thisEnd] = intervals[i];
    const [lastStart, lastEnd] = intervals[i - 1] ?? [-Infinity, -Infinity];
    if (lastEnd > thisEnd) {
      intervals.splice(i, 1);
    } else if (lastEnd >= thisStart) {
      intervals[i - 1] = [lastStart, thisEnd];
      intervals.splice(i, 1);
      break;
    } else if (newStart > thisEnd) {
      ++i;
    } else if (newEnd < thisStart) {
      if (!inserted) {
        intervals.splice(i, 0, newInterval);
        inserted = true;
      }
      break;
    } else if (inserted) {
      break;
    } else {
      intervals[i] = [Math.min(newStart, thisStart), Math.max(newEnd, thisEnd)];
      inserted = true;
      ++i;
    }
  }
  if (!inserted) {
    intervals.push(newInterval);
  }
  return intervals;
};

module.exports = insert;
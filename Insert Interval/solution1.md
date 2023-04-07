# Intuition
This problem can be solved using the iterative approach. We iterate over the given intervals, comparing each interval with the new interval. We consider three cases:

1.  The current interval ends before the new interval starts. In this case, we move to the next interval without doing anything.
    
2.  The current interval starts before or at the same time as the new interval and ends after the new interval starts. In this case, we merge the new interval into the current interval.
    
3.  The current interval starts after the new interval ends. In this case, we insert the new interval before the current interval and stop iterating.
    
# Approach
To implement this approach, we use a loop with a variable `i` to iterate over the intervals. We also use a variable `inserted` to keep track of whether we have inserted the new interval into the intervals list. We initialize `inserted` to `false` before the loop.

Inside the loop, we check the current interval against the new interval and update the intervals list and `inserted` variable as necessary. If we have not inserted the new interval into the list by the end of the loop, we insert it at the end.

# Complexity
- The time complexity of this algorithm is $$O(n)$$, where n is the number of intervals in the given list.

- The space complexity is $$O(1)$$, we are modifying the intervals in-place.

# Code
```js
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
```
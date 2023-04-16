# Intuition
Detecting cycles in the course prerequisites graph can help determine if it's possible to finish all courses. If there's a cycle, it means there's a circular dependency between courses, and it's impossible to finish all courses.

# Approach
1.  Build a graph to represent the courses and their prerequisites, where each node has a value and a list of prerequisite nodes (previous courses).
2.  Use a DFS traversal on the graph to detect if there's a cycle. During the traversal, memoize the visited and processed nodes.
3.  If there's a cycle, return false; otherwise, return true.

# Complexity
- Time complexity: $$O(n+e)$$, where nnn is the number of courses and eee is the number of prerequisites. The DFS traversal visits each node and edge once.

- Space complexity: $$O(n+e)$$, where nnn is the number of courses and eee is the number of prerequisites. The graph stores the courses and prerequisites, and the memo array stores the visited and processed nodes.

# Code
```js
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = Array.from(
    {
      length: numCourses,
    },
    (_, val) => ({
      val,
      prev: [],
    }),
  );
  for (let [courseIdx, preCourseIdx] of prerequisites) {
    graph[courseIdx].prev.push(graph[preCourseIdx]);
  }

  const memo = [];

  const dfs = (node) => {
    if (!node) {
      return true;
    }
    if (memo[node.val] === 2) {
      return true;
    }
    if (memo[node.val] === 1) {
      return false;
    }
    memo[node.val] = 1;
    for (let prevNode of node.prev) {
      if (!dfs(prevNode)) {
        return false;
      }
    }
    memo[node.val] = 2;
    return true;
  };

  for (let course of graph) {
    if (!dfs(course)) {
      return false;
    }
  }
  return true;
};
```
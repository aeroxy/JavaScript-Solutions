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

module.exports = canFinish;
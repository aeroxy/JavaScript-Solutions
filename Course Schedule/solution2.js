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
    () => ([]),
  );
  for (let [courseIdx, preCourseIdx] of prerequisites) {
    graph[courseIdx].push(preCourseIdx);
  }

  const memo = [];

  const dfs = (i) => {
    if (memo[i] === 2) {
      return true;
    }
    if (memo[i] === 1) {
      return false;
    }
    memo[i] = 1;
    for (let ci of graph[i]) {
      if (!dfs(ci)) {
        return false;
      }
    }
    memo[i] = 2;
    return true;
  };

  for (let i = 0; i < graph.length; ++i) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;
};

module.exports = canFinish;
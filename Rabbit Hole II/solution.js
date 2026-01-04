/**
 * Find the maximum number of different web pages that can be visited in a single browsing session.
 *
 * @param {number} numberOfPages - The number of web pages in the encyclopedia (numbered 1 to N)
 * @param {number} numberOfLinks - The number of links present across the pages
 * @param {number[]} sourcePages - Array of length M where sourcePages[i] is the page number that the ith link is present on
 * @param {number[]} destinationPages - Array of length M where destinationPages[i] is the page number that the ith link points to
 *                       (Note: sourcePages[i] ≠ destinationPages[i] and both are in range [1, numberOfPages])
 * @return {number} - The maximum number of different pages that can be visited in a single session
 *
 * Example:
 * getMaxVisitableWebpages(4, 4, [1, 2, 3, 4], [4, 1, 2, 1]) returns 4
 * This means that starting from page 3, you can visit pages 3→2→1→4, for a total of 4 different pages.
 */
function getMaxVisitableWebpages(numberOfPages, numberOfLinks, sourcePages, destinationPages) {
  // 1. Build Adjacency List
  // Using 1-based indexing for convenience to match input
  const adj = Array.from({ length: numberOfPages + 1 }, () => []);
  for (let i = 0; i < numberOfLinks; i++) {
    adj[sourcePages[i]].push(destinationPages[i]);
  }

  // 2. Iterative Tarjan's Algorithm for SCC
  // State arrays
  const ids = new Int32Array(numberOfPages + 1).fill(-1);
  const low = new Int32Array(numberOfPages + 1);
  const onStack = new Uint8Array(numberOfPages + 1);
  const stack = []; // Tarjan's stack
  
  let idCounter = 0;
  let sccCount = 0;
  
  // SCC results
  const sccIds = new Int32Array(numberOfPages + 1).fill(-1); // map node -> sccId
  const sccSizes = []; // map sccId -> size

  // Iterative DFS State
  // We simulate the call stack: [u, nextNeighborIndex]
  const workStack = [];

  for (let i = 1; i <= numberOfPages; i++) {
    if (ids[i] === -1) {
      // Start DFS from unvisited node i
      workStack.push([i, 0]);

      while (workStack.length > 0) {
        let [u, idx] = workStack[workStack.length - 1];

        // Pre-visit logic (first time seeing u in this DFS branch)
        if (idx === 0) {
          ids[u] = low[u] = idCounter++;
          stack.push(u);
          onStack[u] = 1;
        }

        let neighbors = adj[u];
        let pushedChild = false;

        // Iterate neighbors starting from last saved index
        while (idx < neighbors.length) {
          let v = neighbors[idx];
          // Update the index in the current stack frame so we resume correctly later
          workStack[workStack.length - 1][1] = idx + 1;

          if (ids[v] === -1) {
            // Found unvisited child, push to stack and "recurse"
            workStack.push([v, 0]);
            pushedChild = true;
            break; 
          } else if (onStack[v]) {
            // Back edge
            low[u] = Math.min(low[u], ids[v]);
          }
          idx++;
        }

        if (pushedChild) continue; // Continue the "recursion"

        // Post-visit logic (all neighbors processed)
        workStack.pop();

        // If there is a parent in the DFS tree, update its low-link value
        if (workStack.length > 0) {
          let parent = workStack[workStack.length - 1][0];
          low[parent] = Math.min(low[parent], low[u]);
        }

        // Check if u is a root of an SCC
        if (ids[u] === low[u]) {
          let size = 0;
          let node;
          do {
            node = stack.pop();
            onStack[node] = 0;
            sccIds[node] = sccCount;
            size++;
          } while (node !== u);
          sccSizes.push(size);
          sccCount++;
        }
      }
    }
  }

  // 3. Build Condensation Graph (DAG)
  // sccAdj[u] contains list of SCCs reachable from SCC u
  const sccAdj = Array.from({ length: sccCount }, () => []);
  const sccInDegree = new Int32Array(sccCount);
  
  // Use a set to prevent duplicate edges between SCCs
  // To avoid creating N Sets, we can use a temporary frequency array or Set per iteration
  // or simply deduplicate after building.
  
  for (let u = 1; u <= numberOfPages; u++) {
    let uSCC = sccIds[u];
    for (let v of adj[u]) {
      let vSCC = sccIds[v];
      if (uSCC !== vSCC) {
        sccAdj[uSCC].push(vSCC);
      }
    }
  }

  // Deduplicate edges and compute in-degrees
  for (let i = 0; i < sccCount; i++) {
    if (sccAdj[i].length > 0) {
      // Dedupe
      const uniqueNeighbors = [...new Set(sccAdj[i])];
      sccAdj[i] = uniqueNeighbors;
      for (let neighbor of uniqueNeighbors) {
        sccInDegree[neighbor]++;
      }
    }
  }

  // 4. DP on DAG
  // dp[i] = Max pages visitable starting from SCC i
  // Since we want to process dependencies first (or reverse), we can use Topological Sort.
  // We need to compute dp[u] = size[u] + max(dp[v]).
  // This requires v to be computed before u.
  // In a topological sort (u -> v), u appears before v.
  // So we iterate the topological order in REVERSE.

  // Kahn's Algorithm for Topological Sort
  const queue = [];
  for (let i = 0; i < sccCount; i++) {
    if (sccInDegree[i] === 0) queue.push(i);
  }

  const topoOrder = [];
  let head = 0; // mimic queue.shift() with pointer for performance
  while (head < queue.length) {
    let u = queue[head++];
    topoOrder.push(u);
    for (let v of sccAdj[u]) {
      sccInDegree[v]--;
      if (sccInDegree[v] === 0) queue.push(v);
    }
  }

  // Compute DP
  const dp = new Int32Array(sccCount);
  let globalMax = 0;

  // Iterate reverse topological order (sinks to sources)
  for (let i = sccCount - 1; i >= 0; i--) {
    let u = topoOrder[i];
    let maxNext = 0;
    
    // Find max weight of neighbors
    for (let v of sccAdj[u]) {
      if (dp[v] > maxNext) {
        maxNext = dp[v];
      }
    }
    
    dp[u] = sccSizes[u] + maxNext;
    if (dp[u] > globalMax) {
      globalMax = dp[u];
    }
  }

  return globalMax;
}

module.exports = getMaxVisitableWebpages;
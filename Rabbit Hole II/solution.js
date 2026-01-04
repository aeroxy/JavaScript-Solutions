/**
 * Find the maximum number of different web pages that can be visited in a single browsing session.
 *
 * @param {number} N - The number of web pages in the encyclopedia (numbered 1 to N)
 * @param {number} M - The number of links present across the pages
 * @param {number[]} A - Array of length M where A[i] is the page number that the ith link is present on
 * @param {number[]} B - Array of length M where B[i] is the page number that the ith link points to
 *                       (Note: A[i] ≠ B[i] and both are in range [1, M])
 * @return {number} - The maximum number of different pages that can be visited in a single session
 *
 * Example:
 * getMaxVisitableWebpages(4, 4, [1, 2, 3, 4], [4, 1, 2, 1]) returns 4
 * This means that starting from page 3, you can visit pages 3→2→1→4, for a total of 4 different pages.
 */
function getMaxVisitableWebpages(N, M, A, B) {
  // --- 1. Build Graph using CSR (Counting Sort approach) ---
  // Much faster than Array.from + push
  
  // head[i] stores the starting index of edges for node i in the 'to' array
  const head = new Int32Array(N + 2); 
  // We need to count degrees first
  const degree = new Int32Array(N + 1);
  
  for (let i = 0; i < M; i++) {
    degree[A[i]]++;
  }
  
  // Compute prefix sums for 'head'
  // head[i] will point to the start of node i's edges
  let currentPos = 0;
  for (let i = 1; i <= N; i++) {
    head[i] = currentPos;
    currentPos += degree[i];
  }
  head[N + 1] = currentPos; // Sentinel

  // Fill 'to' array (destinations)
  const to = new Int32Array(M);
  // We use a temp pointer array to track insertion position
  const tempHead = new Int32Array(head); 
  
  for (let i = 0; i < M; i++) {
    const u = A[i];
    const v = B[i];
    to[tempHead[u]] = v;
    tempHead[u]++;
  }

  // --- 2. Iterative Tarjan's Algorithm ---
  const ids = new Int32Array(N + 1); // 0 (unvisited) is fine if we check explicitly, but -1 is safer logic. 
  ids.fill(-1);
  const low = new Int32Array(N + 1);
  const onStack = new Int8Array(N + 1); // Using Int8 for boolean flag is efficient
  const stack = new Int32Array(N + 1);
  let stackPtr = 0;
  
  let idCounter = 0;
  let sccCount = 0;
  
  // sccId[u] = ID of the SCC that node u belongs to
  const sccId = new Int32Array(N + 1).fill(-1);
  // sccSize[id] = number of nodes in that SCC
  const sccSize = new Int32Array(N + 1); 

  // Simulation Stack for Recursion
  // Max depth is N
  const workStackNode = new Int32Array(N + 1);
  const workStackIter = new Int32Array(N + 1); // Tracks current edge index for node
  let workPtr = 0;

  for (let startNode = 1; startNode <= N; startNode++) {
    if (ids[startNode] !== -1) continue;

    // Push startNode
    workStackNode[workPtr] = startNode;
    workStackIter[workPtr] = head[startNode];
    workPtr++;

    while (workPtr > 0) {
      const u = workStackNode[workPtr - 1];
      let edgeIdx = workStackIter[workPtr - 1];
      
      // First time visiting u?
      if (ids[u] === -1) {
        ids[u] = low[u] = idCounter++;
        stack[stackPtr++] = u;
        onStack[u] = 1;
      }

      let pushedChild = false;
      const limit = head[u + 1];

      // Iterate neighbors
      while (edgeIdx < limit) {
        const v = to[edgeIdx];
        
        if (ids[v] === -1) {
          // Save current state
          workStackIter[workPtr - 1] = edgeIdx + 1;
          
          // Push child
          workStackNode[workPtr] = v;
          workStackIter[workPtr] = head[v];
          workPtr++;
          
          pushedChild = true;
          break; // "Recursive call"
        } else if (onStack[v]) {
          if (ids[v] < low[u]) low[u] = ids[v];
        }
        edgeIdx++;
      }

      if (pushedChild) continue;

      // Finished processing u
      workPtr--; // Pop from recursion stack

      if (workPtr > 0) {
        const parent = workStackNode[workPtr - 1];
        if (low[u] < low[parent]) low[parent] = low[u];
      }

      // Root of SCC?
      if (low[u] === ids[u]) {
        let size = 0;
        let node;
        do {
          node = stack[--stackPtr];
          onStack[node] = 0;
          sccId[node] = sccCount;
          size++;
        } while (node !== u);
        sccSize[sccCount] = size;
        sccCount++;
      }
    }
  }

  // --- 3. Build Condensed Graph (CSR) ---
  // We need to run DP on the SCC DAG. 
  // Edges: u -> v implies sccId[v] < sccId[u] (Reverse Topological Order Property of Tarjan)
  // We want to compute dp[i] = size[i] + max(dp[neighbor_scc])
  // We need outgoing edges from SCC i.
  
  // We can rebuild a CSR for the SCC graph. 
  // Since we allow duplicates (idempotent max), we can reuse the counting sort strategy.
  
  // Count outgoing edges for each SCC
  const sccDegree = new Int32Array(sccCount);
  for (let u = 1; u <= N; u++) {
    const uSCC = sccId[u];
    const limit = head[u + 1];
    for (let i = head[u]; i < limit; i++) {
      const v = to[i];
      const vSCC = sccId[v];
      if (uSCC !== vSCC) {
        sccDegree[uSCC]++;
      }
    }
  }

  // Build sccHead
  const sccHead = new Int32Array(sccCount + 1);
  currentPos = 0;
  for (let i = 0; i < sccCount; i++) {
    sccHead[i] = currentPos;
    currentPos += sccDegree[i];
  }
  sccHead[sccCount] = currentPos;

  // Fill sccTo
  // Note: This may contain duplicates, which is fine for Math.max
  const sccTo = new Int32Array(currentPos);
  const sccTempHead = new Int32Array(sccHead);

  for (let u = 1; u <= N; u++) {
    const uSCC = sccId[u];
    const limit = head[u + 1];
    for (let i = head[u]; i < limit; i++) {
      const v = to[i];
      const vSCC = sccId[v];
      if (uSCC !== vSCC) {
        sccTo[sccTempHead[uSCC]] = vSCC;
        sccTempHead[uSCC]++;
      }
    }
  }

  // --- 4. Dynamic Programming ---
  // Iterate 0..sccCount-1. 
  // Due to Tarjan's property, if SCC U -> SCC V, then V is discovered/finished first.
  // Wait, Tarjan: sinks are popped first. Sinks have ID 0.
  // If U -> V, V is a dependency. In DAG, V is "deeper". 
  // V is popped before U. So sccId[V] < sccId[U].
  // So to compute dp[U], we need dp[V]. Since V < U, dp[V] is already computed.
  
  const dp = new Int32Array(sccCount);
  let globalMax = 0;

  for (let i = 0; i < sccCount; i++) {
    let maxNext = 0;
    const start = sccHead[i];
    const end = sccHead[i+1];
    
    for (let k = start; k < end; k++) {
      const neighborSCC = sccTo[k];
      if (dp[neighborSCC] > maxNext) {
        maxNext = dp[neighborSCC];
      }
    }
    
    dp[i] = sccSize[i] + maxNext;
    if (dp[i] > globalMax) {
      globalMax = dp[i];
    }
  }

  return globalMax;
}

module.exports = getMaxVisitableWebpages;
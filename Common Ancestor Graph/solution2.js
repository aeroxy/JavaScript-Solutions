/**
 * Optimized Lowest Common Ancestor in a visual tree
 * Complexity: O(N) time, O(N) space
 * @param {string} treeStringGraphInput
 * @returns {string} Tree with LCA bracketed + Answer line
 */
function findCommonAncestorInStringGraph(treeStringGraphInput) {
  const lines = treeStringGraphInput.split('\n');
  const separatorIndex = lines.indexOf('---');
  const treeLines = lines.slice(0, separatorIndex);
  const queryLines = lines.slice(separatorIndex + 1);

  // 1. Parse Query
  let valA, valB;
  queryLines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('A:')) valA = trimmed.split(':')[1].trim();
    if (trimmed.startsWith('B:')) valB = trimmed.split(':')[1].trim();
  });

  // 2. Parse Nodes (O(N)) & Build Spatial Map (O(1) lookup)
  const nodes = [];
  const nodeMap = new Map(); // "r,c" -> Node

  treeLines.forEach((line, r) => {
    const regex = /\d+/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
      const val = match[0];
      const idx = match.index;
      // Calculate center exactly as in solution1 to match coordinate logic
      const center = idx + Math.floor(val.length / 2); 
      
      const node = {
        r,
        c: center,
        val,
        children: [],
        // Pre-calculated flags for logic
        hasA: false,        // subtree contains A (inclusive)
        hasB: false,        // subtree contains B (inclusive)
        childrenHasA: false,// children subtrees contain A
        childrenHasB: false,// children subtrees contain B
        isCandidate: false  // is a candidate for LCA (strict ancestor of both)
      };
      
      nodes.push(node);
      nodeMap.set(`${r},${center}`, node);
    }
  });

  // 3. Parse Edges (O(N)) using Map lookups
  treeLines.forEach((line, r) => {
    // Find forward slashes '/'
    let slashRegex = /\//g;
    let match;
    while ((match = slashRegex.exec(line)) !== null) {
      const c = match.index;
      // Parent: r-1, c+1
      const parent = nodeMap.get(`${r - 1},${c + 1}`);
      // Child: r+1, c-1
      const child = nodeMap.get(`${r + 1},${c - 1}`);
      if (parent && child) parent.children.push(child);
    }

    // Find backslashes '\'
    let backslashRegex = /\\/g;
    while ((match = backslashRegex.exec(line)) !== null) {
      const c = match.index;
      // Parent: r-1, c-1
      const parent = nodeMap.get(`${r - 1},${c - 1}`);
      // Child: r+1, c+1
      const child = nodeMap.get(`${r + 1},${c + 1}`);
      if (parent && child) parent.children.push(child);
    }
  });

  // 4. Ancestry & LCA Logic (DFS Post-order)
  const visited = new Set();
  const lcaCandidates = new Set();

  function dfs(node) {
    if (visited.has(node)) return { hasA: node.hasA, hasB: node.hasB }; 
    
    // Check current node
    let currentHasA = (node.val === valA);
    let currentHasB = (node.val === valB);
    
    // Check children
    let kidsHaveA = false;
    let kidsHaveB = false;

    for (const child of node.children) {
      const res = dfs(child); // Recursive
      if (res.hasA) kidsHaveA = true;
      if (res.hasB) kidsHaveB = true;
    }

    node.childrenHasA = kidsHaveA;
    node.childrenHasB = kidsHaveB;
    
    // "Strict Ancestry" Candidate: children (subtrees) have both A and B
    if (kidsHaveA && kidsHaveB) {
      node.isCandidate = true;
      lcaCandidates.add(node);
    }

    // Update current node's total status
    node.hasA = currentHasA || kidsHaveA;
    node.hasB = currentHasB || kidsHaveB;
    
    visited.add(node);
    return { hasA: node.hasA, hasB: node.hasB };
  }

  nodes.forEach(n => {
    if (!visited.has(n)) dfs(n);
  });

  // 5. Filter Lowest Candidates (O(N))
  // A candidate is "lowest" if none of its children are candidates
  const finalLCAs = new Set();
  for (const node of lcaCandidates) {
    let hasCandidateChild = false;
    for (const child of node.children) {
      if (lcaCandidates.has(child)) {
        hasCandidateChild = true;
        break;
      }
    }
    if (!hasCandidateChild) {
      finalLCAs.add(node);
    }
  }

  // 6. Render Output
  const outputLines = [...treeLines];
  // Group nodes by row for rendering
  const nodesByRow = new Map();
  nodes.forEach(n => {
    if (!nodesByRow.has(n.r)) nodesByRow.set(n.r, []);
    nodesByRow.get(n.r).push(n);
  });

  // Render logic per row
  nodesByRow.forEach((rowNodes, r) => {
    rowNodes.sort((a, b) => a.c - b.c); // O(K log K) where K is nodes in row
    
    let newLine = "";
    let currentIdx = 0;

    rowNodes.forEach(n => {
      let text = n.val;

      // Swap Logic: If strict ancestor of A or B, swap values
      if (n.childrenHasA || n.childrenHasB) {
        if (text === valA) text = valB;
        else if (text === valB) text = valA;
      }

      // Bracket Logic
      if (finalLCAs.has(n)) {
        text = `[${text}]`;
      }

      // Positioning
      const start = n.c - Math.floor(text.length / 2);
      const padLen = start - currentIdx;
      if (padLen > 0) {
        newLine += " ".repeat(padLen);
        currentIdx += padLen;
      }
      newLine += text;
      currentIdx += text.length;
    });

    // Fill remaining line
    if (currentIdx < treeLines[r].length) {
      newLine += " ".repeat(treeLines[r].length - currentIdx);
    }
    outputLines[r] = newLine;
  });

  // 7. Format Answer
  const answerVals = [];
  finalLCAs.forEach(n => {
    let v = n.val;
    if (v === valA) v = valB;
    else if (v === valB) v = valA;
    answerVals.push(v);
  });
  
  // Numeric sort for answer output
  answerVals.sort((a, b) => Number(a) - Number(b)); 
  
  const answerLine = `Answer: ${answerVals.join(', ')}`;
  return [...outputLines, '---', ...queryLines, answerLine].join('\n');
}

module.exports = findCommonAncestorInStringGraph;

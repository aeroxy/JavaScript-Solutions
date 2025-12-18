/**
 * Finds lowest common ancestor in a visual tree
 * @param {string} treeStringGraphInput
 * @returns {string} Tree with LCA bracketed + Answer line
 */
function findCommonAncestorInStringGraph(treeStringGraphInput) {
  const lines = treeStringGraphInput.split('\n');
  const separatorIndex = lines.indexOf('---');
  const treeLines = lines.slice(0, separatorIndex);
  const queryLines = lines.slice(separatorIndex + 1);

  // Parse Query
  let valA, valB;
  queryLines.forEach(line => {
    if (line.trim().startsWith('A:')) valA = line.split(':')[1].trim();
    if (line.trim().startsWith('B:')) valB = line.split(':')[1].trim();
  });

  // Parse Nodes
  const nodes = []; // { r, c, val, id, children: [] }
  treeLines.forEach((line, r) => {
    if (!line.match(/\d/)) return;
    
    const regex = /\d+/g;
    let match;
    while ((match = regex.exec(line)) !== null) {
      const val = match[0];
      const idx = match.index;
      const center = idx + Math.floor(val.length / 2);
      nodes.push({ r, c: center, val, id: nodes.length, children: [], originalStart: idx, originalLen: val.length });
    }
  });

  // Parse Edges
  treeLines.forEach((line, r) => {
    if (!line.match(/[\/\\]/)) return;
    
    // Look for /
    let slashRegex = /\//g;
    let match;
    while ((match = slashRegex.exec(line)) !== null) {
      const c = match.index;
      // Parent: r-1, c+1
      const parent = nodes.find(n => n.r === r - 1 && Math.abs(n.c - (c + 1)) <= 1);
      // Child: r+1, c-1
      const child = nodes.find(n => n.r === r + 1 && Math.abs(n.c - (c - 1)) <= 1);
      if (parent && child) parent.children.push(child);
    }

    // Look for \
    let backslashRegex = /\\/g;
    while ((match = backslashRegex.exec(line)) !== null) {
      const c = match.index;
      // Parent: r-1, c-1
      const parent = nodes.find(n => n.r === r - 1 && Math.abs(n.c - (c - 1)) <= 1);
      // Child: r+1, c+1
      const child = nodes.find(n => n.r === r + 1 && Math.abs(n.c - (c + 1)) <= 1);
      if (parent && child) parent.children.push(child);
    }
  });

  // Find Ancestry
  const cache = new Map(); // id -> { hasA, hasB }
  
  function check(node) {
    if (cache.has(node.id)) return cache.get(node.id);
    
    let hasA = node.val === valA;
    let hasB = node.val === valB;
    
    for (const child of node.children) {
      const res = check(child);
      if (res.hasA) hasA = true;
      if (res.hasB) hasB = true;
    }
    
    const result = { hasA, hasB };
    cache.set(node.id, result);
    return result;
  }

  nodes.forEach(n => check(n));

  // Find CAs (Strict Ancestry)
  const candidates = new Set();
  nodes.forEach(n => {
    let childrenHasA = false;
    let childrenHasB = false;
    
    for (const child of n.children) {
      const cRes = check(child);
      if (cRes.hasA) childrenHasA = true;
      if (cRes.hasB) childrenHasB = true;
    }
    
    if (childrenHasA && childrenHasB) {
      candidates.add(n);
    }
  });

  // Filter for Lowest
  const lcas = [];
  candidates.forEach(n => {
    // If any child is also a candidate, this node is not the lowest
    const hasCandidateChild = n.children.some(child => candidates.has(child));
    if (!hasCandidateChild) {
      lcas.push(n);
    }
  });

  // Render
  const outputLines = [...treeLines];
  const lcasByRow = {};
  lcas.forEach(n => {
    if (!lcasByRow[n.r]) lcasByRow[n.r] = [];
    lcasByRow[n.r].push(n);
  });

  Object.keys(lcasByRow).forEach(r => {
    let line = outputLines[r];
    const rowNodes = nodes.filter(n => n.r == r);
    rowNodes.sort((a, b) => a.c - b.c);
    
    let currentIdx = 0;
    let newLine = "";
    
    rowNodes.forEach(n => {
      const isLCA = lcas.includes(n);
      let text = n.val;
      
      // Check if node is an ancestor of A or B (has children with A or B)
      let isAncestor = false;
      for (const child of n.children) {
        const cRes = check(child);
        if (cRes.hasA || cRes.hasB) {
          isAncestor = true;
          break;
        }
      }

      if (isAncestor) {
        // Swap Rule
        if (text === valA) text = valB;
        else if (text === valB) text = valA;
      }

      if (isLCA) {
        text = `[${text}]`;
      }
      
      const start = n.c - Math.floor(text.length / 2);
      const padLen = start - currentIdx;
      if (padLen > 0) {
        newLine += " ".repeat(padLen);
        currentIdx += padLen;
      }
      newLine += text;
      currentIdx += text.length;
    });
    
    if (currentIdx < line.length) {
        newLine += " ".repeat(line.length - currentIdx);
    }
    
    outputLines[r] = newLine;
  });
  
  // Format Answer: Use the DISPLAYED values (swapped)
  const answerVals = [...new Set(lcas.map(n => {
    let v = n.val;
    if (v === valA) v = valB;
    else if (v === valB) v = valA;
    return v;
  }))].sort((a, b) => a - b);
  const answerLine = `Answer: ${answerVals.join(', ')}`;
  
  return [...outputLines, '---', ...queryLines, answerLine].join('\n');
}

module.exports = findCommonAncestorInStringGraph;
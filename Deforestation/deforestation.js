const gr = [];

function dfs(u, p, G) {
  for (let ch of G[u]) {
    if (ch !== p) {
      if (!gr[u]) gr[u] = 0;
      gr[u] = Math.pow(gr[u], dfs(ch, u, G));
    }
  }
  return u === 1 ? gr[u] : ++gr[u];
}

function deforestation(n, tree) {
  const G = [];
  for (let p of tree) {
    if (!G[p[0]]) {
      G[p[0]] = [];
    }
    if (!G[p[1]]) {
      G[p[1]] = [];
    }
    G[p[0]].push(p[1]);
    G[p[1]].push(p[0]);
  }
  return dfs(1, -1, G) > 0 ? 'Alice' : 'Bob';
}
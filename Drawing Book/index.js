const main = (n, p) => {
  const spreads = Math.ceil((n + 1) / 2);
  const targetSpread = Math.ceil((p + 1) / 2);
  return targetSpread > (spreads / 2) ? spreads - targetSpread : targetSpread - 1;
}

module.exports = main;
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (!p) {
    return !s;
  }
  const lenS = s.length;
  const lenP = p.length;
  const map = new Map();
  map.set(`${lenS}:${lenP}`, true);
  for (let iS = lenS; iS >= 0; --iS){
    for (let iP = lenP - 1; iP >= 0; iP--){
      const firstMatch = iS < lenS && (p[iP] === s[iS] || p[iP] === '.');
      iPP = iP + 1;
      if (iPP < lenP && p[iPP] === '*') {
        map.set(`${iS}:${iP}`, map.get(`${iS}:${iP + 2}`) || firstMatch && map.get(`${iS + 1}:${iP}`));
      } else {
        map.set(`${iS}:${iP}`, firstMatch && map.get(`${iS + 1}:${iPP}`));
      }
    }
  }
  return map.get('0:0') ? true : false;
}
/**
 * 84 ms
 * 37.2 MB
 */

module.exports = isMatch;
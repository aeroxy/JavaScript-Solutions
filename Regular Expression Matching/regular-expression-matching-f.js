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

  const check = (iS, iP) => {
    const firstCheck = map.get(`${iS}:${iP}`);
    if (firstCheck !== undefined) {
      return firstCheck;
    }
    if (iS > lenS) {
      return false;
    }
    if (iS === lenS && iP === lenP) {
      return true;
    };

    if (p[iP] === '.' || p[iP] === s[iS]) {
      map.set(`${iS}:${iP}`, p[iP + 1] === '*' ?
        check(iS + 1, iP) || check(iS, iP + 2) :
        check(iS + 1, iP + 1));
    } else {
      map.set(`${iS}:${iP}`, p[iP + 1] === '*' ?
        check(iS, iP + 2) : false);
    }
    return map.get(`${iS}:${iP}`);
  }

  return check(0, 0);
}
/**
 * 60 ms
 * 37.5 MB
 */

module.exports = isMatch;
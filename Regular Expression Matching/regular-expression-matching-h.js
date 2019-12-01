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
  const map = [];
  const check = (iS, iP) => {
    if (!map[iS]) {
      map[iS] = [];
    }
    const firstCheck = map[iS][iP];
    if (firstCheck !== undefined) {
      return firstCheck;
    }
    if (iS > lenS) {
      return false;
    }
    if (iS === lenS && iP === lenP) {
      return true;
    }

    if (p[iP] === '.' || p[iP] === s[iS]) {
      map[iS][iP] = p[iP + 1] === '*' ?
        check(iS + 1, iP) || check(iS, iP + 2) :
        check(iS + 1, iP + 1);
    } else {
      map[iS][iP] = p[iP + 1] === '*' ?
        check(iS, iP + 2) : false;
    }
    return map[iS][iP];
  }

  return check(0, 0);
}
/**
 * 64 ms
 * 36.2 MB
 */

module.exports = isMatch;
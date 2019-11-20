/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  let sLength = s.length;
  let pLength = p.length;
  if ((sLength === 0 && pLength === 0) || p === '.*') {
    return true;
  }
  if (sLength === 0) {
    return false;
  }
  let idx = 0;
  let i = 0;
  let c = '';
  while (i < pLength && idx < sLength) {
    console.log({
      idx,
      i,
      c,
      p: p[i],
      s: s[idx]
    })
    if (p[i] === '.') {
      if (p[i + 1] === '*') {
        if (p[i + 2] === undefined) {
          return true;
        }
        i += 2;
        if (p[i] === '.') {
          --i
        } else {
          const lstIdx = s.lastIndexOf(p[i]);
          if (lstIdx < idx) {
            return false;
          } else {
            idx = lstIdx;
          }
        }
      } else {
        ++idx;
      }
      ++i;
      c = '';
    }
    if (p[i] === '*') {
      while(s[idx] === c) {
        ++idx;
      }
      ++i;
      c = '';
    }
    if (!c) {
      c = p[i];
      ++i;
      if (p[i] === '*') {
        console.log(1, {
          c,
          a: s[idx]
        })
        while(s[idx] === c) {
          ++idx;
        }
        c = '';
      }
      console.log(2, {
        c,
        a: s[idx]
      })
      if (s[idx] === c || c === '.') {
        c = '';
        ++idx;
      }
    } else {
      ++i;
    }
  }
  console.log({
    idx,
    i,
    sLength,
    pLength
  })
  return idx === sLength;
};
/**
 * 64 ms
 * 34.8 MB
 */

module.exports = isMatch;
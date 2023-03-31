/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (!t) {
    return '';
  }

  const countT = new Map();
  const window = new Map();

  for (let c of t) {
    countT.set(c, (countT.get(c) ?? 0) + 1);
  }

  let have = 0;
  let need = countT.size;

  let start = -1;
  let end = -1;
  let len = Infinity;

  let l = 0;

  for (let r = 0; r < s.length; ++r) {
    const c = s[r];
    window.set(c, (window.get(c) ?? 0) + 1);

    if (countT.has(c) && countT.get(c) === window.get(c)) {
      ++have;
    }

    while (have === need) {
      const curLen = r - l;
      if (curLen < len) {
        start = l;
        end = r;
        len = curLen;
      }
      const lc = s[l];
      window.set(lc, window.get(lc) - 1);

      if (countT.has(lc) && countT.get(lc) > window.get(lc)) {
        --have;
      }
      ++l;
    }
  }

  return s.slice(start, end + 1);
};

module.exports = minWindow;
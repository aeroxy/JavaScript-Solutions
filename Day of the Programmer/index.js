const main = year => {
  const months = Array(12).fill(0).map((_val, idx) =>
    idx > 6 ? (idx % 2 ? 31 : 30) : (idx % 2 ? 30 : 31)
  );
  if (year === 1918) {
    months[1] = 15;
  }
  if (year < 1918) {
    months[1] = year % 4 ? 28 : 29;
  }
  if (year > 1918) {
    months[1] = year % 400 ? year % 4 ? 28 : (year % 100 ? 29 : 28) : 29;
  }
  return months.reduce((acc, cur, idx, arr) => {
    const result = acc - cur;
    if (result < 0) {
      let day = months[idx] + result;
      arr.splice(0);
      let month = (idx + 1).toString();
      month = month.length === 1 ? `0${month}` : month;
      return `${day}.${month}.${year}`;
    }
    return result;
  }, 256);
}

module.exports = main;
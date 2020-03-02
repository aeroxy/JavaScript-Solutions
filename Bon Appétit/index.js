const main = (bill, excludedIdx, b) => {
  const sum = bill.reduce((acc, cur, idx) => {
    if (excludedIdx === idx) {
      return acc;
    }
    return acc + cur;
  }, 0);
  const annaShouldPay = sum / 2;
  return annaShouldPay === b ? 'Bon Appetit' : b - annaShouldPay;
}

module.exports = main;
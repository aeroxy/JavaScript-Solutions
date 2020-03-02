const main = (keyboards, drives, b) => {
  let max = -1;
  const sorter = (a, b) => (a - b);
  keyboards = keyboards.sort(sorter);
  drives = drives.sort(sorter);
  loop:
    for (let keyboard of keyboards) {
      for (let drive of drives) {
        const price = keyboard + drive;
        if (price > b) {
          break;
        }
        if (price > max) {
          max = price;
        }
      }
    }
  return max;
}

module.exports = main;
const kangaroo = (x1, v1, x2, v2) => {
  const distances = Array(3).fill(0);
  distances[2] = Math.abs(x2 - x1);
  let jump = 0;
  while (!jump || (distances[1] > distances[2] && distances[0] !== distances[1])) {
    let tmp = distances[1];
    distances[1] = distances[2];
    distances[0] = tmp;
    ++jump;
    distances[2] = Math.abs(x2 + (v2 * jump) - x1 - (v1 * jump));
    // console.log({ distances });
    if (!distances[2]) {
      return 'YES';
    }
  }
  return 'NO';
}

module.exports = kangaroo;
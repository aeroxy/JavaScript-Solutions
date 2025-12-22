/**
 * @param {number} C - The circumference of the circular train track in metres.
 * @param {number} N - The number of tunnels on the track.
 * @param {number[]} A - An array where A[i] is the starting position of the ith tunnel.
 * @param {number[]} B - An array where B[i] is the ending position of the ith tunnel.
 * @param {number} K - The target tunnel time in seconds.
 * @return {number} - The total number of seconds elapsed before the train's tunnel time becomes K.
 */
function getSecondsElapsed(C, N, A, B, K) {
  // Write your code here
  if (K === 0) {
    return 0;
  }

  A.sort((x, y) => x - y)
  B.sort((x, y) => x - y)

  let tunnelLength = 0;
  for (let i = 0; i < N; ++i) {
    tunnelLength += B[i] - A[i];
  }

  const laps = Math.ceil(K / tunnelLength) - 1;
  let lastLapLength = K - tunnelLength * laps;

  let travelLength = A[0];

  for (let i = 0; i < N; ++i) {
    const dist = B[i] - A[i];
    const remainingTunnelLength = lastLapLength;
    lastLapLength -= dist;
    if (lastLapLength <= 0) {
      travelLength += remainingTunnelLength;
      break;
    }
    travelLength += dist;
    travelLength += A[i + 1] - B[i];
  }
  
  return travelLength + laps * C;
}

module.exports = getSecondsElapsed;
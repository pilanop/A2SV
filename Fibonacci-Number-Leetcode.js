/**
 * @format
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  const fibs = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }
  return fibs[n];
};

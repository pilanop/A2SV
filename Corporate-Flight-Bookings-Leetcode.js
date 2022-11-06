/**
 * @format
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

var corpFlightBookings = function (bookings, n) {
  let ans = [];
  for (var i = 0; i < n; i++) {
    ans[i] = 0;
  }
  for (var i = 0; i < bookings.length; i++) {
    const [start, end, num] = bookings[i];
    for (var j = start; j <= end; j++) {
      ans[j - 1] += num;
    }
  }
  return ans;
};

/**
 * @format
 * @param {string} S
 * @return {number[]}
 */

var partitionLabels = function (S) {
  const arr = S.split("");
  const result = [];
  let start = 0;
  let end = start;
  let check = start;
  while (start < arr.length && check < arr.length) {
    for (i = check; i < arr.length; i++) {
      if (arr[i] === arr[check] && i > end) {
        end = i;
      }
    }
    if (check < end) {
      check++;
    } else {
      result.push(end - start + 1);
      start = end + 1;
      end = start;
      check = start;
    }
  }
  return result;
};

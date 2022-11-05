/**
 * @format
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  const hash = { 0: 1 };
  for (num of nums) {
    sum += num;
    if (hash[sum - k]) {
      count += hash[sum - k];
    }
    hash[sum] = (hash[sum] || 0) + 1;
  }
  return count;
};

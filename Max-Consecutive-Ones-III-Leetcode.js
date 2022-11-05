/**
 * @format
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function (nums, K) {
  let i = 0,
    j;

  for (j = 0; j < nums.length; ++j) {
    if (nums[j] == 0) K--;
    if (K < 0 && nums[i++] == 0) K++;
  }

  return j - i;
};

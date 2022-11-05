/**
 * @format
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  const prefixSums = [0];
  for (let i = 1; i <= nums.length; i++) {
    prefixSums.push(prefixSums[i - 1] + nums[i - 1]);
  }
  for (let i = 0; i < prefixSums.length; i++) {
    if (
      prefixSums[i] ===
      prefixSums[prefixSums.length - 1] - prefixSums[i] - nums[i]
    ) {
      return i;
    }
  }
  return -1;
};

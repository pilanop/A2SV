/**
 * @format
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let sum = nums[0];
  while (left <= right && right < nums.length) {
    if (sum >= target) {
      minLength = Math.min(right - left + 1, minLength);
      sum -= nums[left];
      left++;
    } else {
      right++;
      sum += nums[right];
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

/**
 * @format
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let offset = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      offset++;
    } else {
      nums[i - offset] = nums[i];
      if (offset > 0) {
        nums[i] = 0;
      }
    }
  }
};

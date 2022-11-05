/**
 * @format
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  if (!nums || !nums.length) return [];
  var res = [];
  for (var i = 0, temp = 1; i < nums.length; i++) {
    res[i] = temp;
    temp *= nums[i];
  }

  for (var j = nums.length - 1, temp = 1; j >= 0; j--) {
    res[j] *= temp;
    temp *= nums[j];
  }
  return res;
};
productExceptSelf([1, 2, 3, 4]);

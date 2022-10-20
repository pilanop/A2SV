/**
 * @format
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
  let currentNum = 0;
  let currentCount = 0;
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    currentNum = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < currentNum) {
        currentCount++;
      }
    }
    resultArr.push(currentCount);
    currentCount = 0;
  }
  return resultArr;
};

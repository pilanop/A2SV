/**
 * @format
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  const findNextGreater = (num) => {
    let passNum = false;
    for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] === num) {
        passNum = true;
      }
      if (nums2[i] > num && passNum) {
        return nums2[i];
      }
    }
    return -1;
  };
  return nums1.map(findNextGreater);
};

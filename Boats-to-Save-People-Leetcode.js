/**
 * @format
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

var numRescueBoats = function (people, limit) {
  let boats = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => a - b);

  while (i <= j) {
    if (people[i] + people[j] > limit) {
      boats++;
      j--;
    } else {
      j--, i++, boats++;
    }
  }
  return boats;
};

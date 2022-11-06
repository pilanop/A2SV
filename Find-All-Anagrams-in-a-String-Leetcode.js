/**
 * @format
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  let number = [];
  let map = new Array(26);
  map.fill(0);
  for (let i = 0; i < p.length; i++) {
    map[p[i].charCodeAt() - 97]++;
  }
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 97;
    map[index]--;
    while (map[index] < 0) {
      let index1 = s[j++].charCodeAt() - 97;
      map[index1]++;
    }
    if (i - j + 1 === p.length) {
      number.push(j);
    }
  }
  return number;
};

/**
 * @format
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map[char]) {
      if (stack.shift() !== char) {
        return false;
      }
      continue;
    }
    stack.unshift(map[char]);
  }
  return stack.length === 0;
};

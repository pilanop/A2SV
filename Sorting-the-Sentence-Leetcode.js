/** @format */
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(" ")
    .sort((a, b) => a.slice(-1) - b.slice(-1))
    .map((w) => w.slice(0, -1))
    .join(" ");
};

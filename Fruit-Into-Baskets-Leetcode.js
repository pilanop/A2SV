/**
 * @format
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function (fruits) {
  if (fruits.length === 1) {
    return 1;
  }

  const addedFruits = [];
  let values = [];
  let i = 0;
  let maxVal = 0;

  while (i < fruits.length) {
    const fruit = fruits[i];

    if (addedFruits.includes(fruit)) {
      values.push(fruit);
      i++;
      continue;
    }

    if (addedFruits.length !== 2) {
      addedFruits.push(fruit);
      values.push(fruit);
    } else {
      const temp = fruits[i - 1] === addedFruits[0] ? 1 : 0;
      let toRemove = null;
      for (let j = values.length - 1; j > -1; j--) {
        if (values[j] === addedFruits[temp]) {
          toRemove = j + 1;
          break;
        }
      }
      addedFruits.splice(temp, 1);
      maxVal = Math.max(values.length, maxVal);
      values = values.slice(toRemove);
      values.push(fruit);
      addedFruits.push(fruit);
    }

    i++;
  }
  return Math.max(maxVal, values.length);
};

/**
 * @format
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  const stack = [];
  while (tokens.length) {
    stack.push(tokens.pop());
    checkIsEval(stack);
  }
  return stack[0];
};

var checkIsEval = function (stack) {
  const len = stack.length;
  if (
    stack.length < 3 ||
    isNaN(stack[len - 1]) ||
    isNaN(stack[len - 2]) ||
    !isNaN(stack[len - 3])
  ) {
    return;
  }
  const operand1 = Number(stack.pop());
  const operand2 = Number(stack.pop());
  const operator = stack.pop();
  switch (operator) {
    case "+":
      stack.push(operand1 + operand2);
      break;
    case "-":
      stack.push(operand1 - operand2);
      break;
    case "/":
      const temp = operand1 / operand2;
      stack.push(temp < 0 ? Math.ceil(temp) : Math.floor(temp));
      break;
    case "*":
      stack.push(operand1 * operand2);
      break;
  }
  checkIsEval(stack);
};

// Write a function isEven(num) which takes as the argument a number.
// It returns a boolean, true if num is even, and false otherwise.
// Your function must use the given function isOdd in your solution.
// isOdd returns true if its argument is odd and false otherwise.
// Examples:
// isEven(2) => true
// isEven(5) => false
// isEven(-55) => false

function isOdd(num) { // given function
  return (num % 2 !== 0);
}

function isEven(num) {
  // returns true if even otherwise returns false
  return !isOdd(num);
}

console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(-55));

// Truthy vs Falsey: Evaluate each expression.

console.log(true && true || false);
//true
console.log(true && (false || true));
//true
console.log((true || false) && (false || false));
//false
console.log((true || false) || (false || false));
//true

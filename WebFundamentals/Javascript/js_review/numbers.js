// Write a function isOdd(num) which takes as the argument num a number.
// It returns a boolean, true if num is odd, and false otherwise.
// Examples:
// isOdd(2) => false
// isOdd(5) => true
// isOdd(-17) => true

function isOdd(num) {
  // your code here...
  if (num % 2 == 1 || num % 2 == -1) {
    //The num % 2 == -1 is a check for all numbers < 0
    return true;
  }else {
    return false;
  }
}

/* alternate solution without if statements
function isOdd(num) {
  var bool = num % 2 !== 0;
  return bool;
}
*/

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));


// Write a function plusFive(num) which takes as the argument num a number.
// It returns the sum of num and 5.
// Examples:
// plusFive(0) => 5
// plusFive(-2) => 3
// plusFive(21) => 26

function plusFive(num) {
  // your code here...
  return num + 5
}

console.log(plusFive(0));
console.log(plusFive(-2));
console.log(plusFive(21));

// Write a function threeOrSeven(num) which takes as the argument num a number.
// It returns a boolean, true if the number is divisible by 3 or 7, and false otherwise.
// Examples:
// threeOrSeven(3) => true
// threeOrSeven(35) => true
// threeOrSeven(10) => false
// threeOrSeven(21) => true

function threeOrSeven(num) {
  // your code here...
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  }else {
    return false;
  }
}

/*
Alternate solution w/ if statements

function threeOrSeven(num) {
  var bool = (num % 3 === 0) || (num % 7 === 0);
  return bool;
}
*/

console.log(threeOrSeven(3));
console.log(threeOrSeven(35));
console.log(threeOrSeven(10));
console.log(threeOrSeven(21));

// Order of Operations: Evaluate each expression.

a = 1 + 1 * 5;
//6
b = (1 + 1) * 5;
//10
c = 1 + 2 - 5 / 6 - 1;
// does 5/6 firs then does the rest left to right to get 1.666666
d = 5 * 5 % 13;
//multiplication comes first then modulus so its 25 % 13 = 12
e = 5 / (-1 * (5 - (-10)));
// work out from the inner most () to get -1/3
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

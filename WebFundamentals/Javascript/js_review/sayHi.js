'use strict'

/** Input: name, a string
** Output: A string that's saying 'Hi' to the string specified by the parameter
**
** Examples
** sayHi("Anthony") => "Hi, Anthony!"
** sayHi("Winnie") => "Hi, Winnie!"
*/
function sayHi(name) {
  let hiName = "Hi, " + name + "!";
  return hiName
}

console.log(sayHi("Jon"));
console.log(sayHi("Eboh"));

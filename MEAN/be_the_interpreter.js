//NUMBER ONE--? Do we still need it to say undefined first?


// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
//
// output:
// undefined
// Yipee I was first!

//declarations get hoisted first in the order of variable then funciton
// var first_variable;
// function firstFunc() {
//     //then the things inside the funciton also get hoisted in the same order
//     first_variable = "Not anymore!!!";
//     console.log(first_variable);
// }
// first_variable = "Yipee I  was first!";
// console.log(first_variable);
//----------------------------------------------------------

//NUMBER TWO
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);
//
// output:
// half-chicken
// gone
// Chicken


//Again declarations get hoisted first. First variable then funcitons
// var food;
// function eat(){
//     var food; //Then follow the same logic for the function scope
//     food = "half-chicken";
//     console.log(food);
//     food = "gone";
//     console.log(food);
// }
// //Then the rest of the code follows
// food = "Chicken";
// eat();
// console.log(food);
// //--------------------------------------------------------

// //NUMBER THREE
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);


// // output:
// // NEW!
// var new_word;
// function lastFunc(){
//     new_word = "old";
// }
// new_word = "NEW!";
// console.log(new_word);
// //----------------------------------------------------------------

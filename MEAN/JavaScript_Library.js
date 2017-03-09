'use strict'

var _ = {
   map: function() {
     //code here;
   },
   reduce: function() {
     // code here;
   },
   find: function() {
     // code here;
   },
   filter: function(arr, callback) {  //should I pass in

     let newarr = [];
     for (var i = 0; i < arr.length; i++) {
     if (callback(arr[i])) { //This test each value of our array against the funciton call back
        //  let output = callback(arr);
        newarr.push(arr[i]);
        }
     }
     return newarr;
     // code here;
    //THE LOGIC BELOW IS DEPRECATED!!!!--------------------------------------------
    //  let output = callback(arr[i]); // does this need to be arr[i] or arr?
    //  console.log("Got Here!"); //The logic for the function passed into the callback happens here!
    //  return output; //DO NOT FORGET TO RETURN HERE OR YOU WILL GET AN UNDEFINED!

   },
   reject: function() {
     // code here;
   }
 }
// you just created a library with 5 methods!


// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].
//
// function (arr) {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }

// _.filter(arr, callback);
// var evens_result = _.filter([1, 2, 3, 4, 5, 6], function (arr) {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// });

//need to make this a test based on num that will return true or false by running on every value in the array
//depending on wether or not a value is even
//THAT test need to be run a number of times govered by a forloop back up in the object method .filter
var evens_result = _.filter([1, 2, 3, 4, 5, 6], function (num) { //the second argument here IS our function callback
    return num % 2 == 0  //This is what should evaluate to True or False
    // The connection here is between arr[i] and num even though we passed an array in the object method
    // we are only dealing with one value at a time above this allows us to untilize the "num" argument
    //which is essentially just a variable that we are assuming is a single number based on our logic
});

// num % 2 == 0 IS what will evaluate to True or False

console.log(evens_result);

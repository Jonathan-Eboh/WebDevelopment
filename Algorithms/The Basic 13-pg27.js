

//1) print 1-255
// for (var i = 1; i <= 255; i++) {
//     console.log(i);
// }

//2)print odds 1-255

//3)Print Ints and Sum 0-255

//4)Interate and print Array

//5)find and print Max

//6)get and print Average

//7)array with odds

// function arrayWithOdd() {
//     var arr = [];
//     for (var i = 1; i < 255; i+=2) {
//         if (i % 2 !== 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
//
// console.log(arrayWithOdd());


//8) square the values
// function squared(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i]*=arr[i];
//     }
//     return arr;
// }
//
// console.log(squared([2,4,6]));

//9)Greater than Y
//
// function greaterThanY(arr,y) {
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]>y) {
//             count+=1;
//         }
//
//     }
//     return count;
// }
//
// console.log(greaterThanY([1,2,3,4,5,6],2));


//10)Zero out negative numbers
// function toZero(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]<0) {
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
// console.log(toZero([-3,-2,-1]));

//11)Min Max Average


//12)Shift Array values
// function shiftOne(arr) {
//     for (var i = 0; i < arr.length-1; i++) {// note that we end at the index before the last one in the array
//         arr[i]= arr[i+1];
//     }
//     arr[arr.length-1]=0;
//     return arr;
// }
// ///This is much more simple than I made it out to be lol
// console.log(shiftOne([1,2,3,4]));

//13)Swap String For Array Negtive values

// function swapString(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]<0) {
//             arr[i]="Dojo";
//         }
//     }
//     return arr;
// }
//
// console.log(swapString([-1,-2,-3]));

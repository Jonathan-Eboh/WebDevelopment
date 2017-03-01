/*
Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.

For example:

printRange(2, 10, 2);
Copy
Would print

2
4
6
8
(Should go UP TO, but NOT INCLUDING the end point)

Bonus (Only If You Have Time):

Make sure it works for negative numbers
If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3) //how do i add this functionality?
*/

//could use two functions if i really wanted to and have and if stament that decides which function runs

function printRange(a = 0,b,c = 1){

if (a < 0 && b < 0 && c< 0) {

    for (var i = a; i > b; i-=c * -1) {
        console.log(i);
    }

}else{

    for (var i = a; i < b; i+=c) {
        console.log(i);
    }

}
}

printRange(2,10,2);
printRange(-2,-10,-2); ///negative version doesnt work when skip value is not added.

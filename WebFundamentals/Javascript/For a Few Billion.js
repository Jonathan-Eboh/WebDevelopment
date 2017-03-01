/*
There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

Use for loops to answer the following:

How much was the reward after 30 days?
remember, a penny isn't 1, but 0.01

Bonus (Only If You Have Time):

How many days would it take the servant to make $10,000?
How about 1 billion?
In JavaScript, there is a value Infinity, how many days until the servant has infinite money?
*/


///money accumilated untill 10000
var day = 0;

for (var i = 0.01; i <= 10000; i*= 2) {

    if (day === 30) {

        console.log("Its been 30 days and I currently have" + i + "monies!");

    }

    day+=1;
}

console.log("It takes " + day + " days to reach 10,000$");


///it takes 20 days to get to to 10000 dollars._______

var monies = 0.01;

for (var i = 2; i <= 30; i++) {

    monies *= 2;

}

console.log("After 30 days the slave will have " + monies + "$ in total");

///after 30 days the slave will have 5368709.12$ dollars in total




////days until a billion dollars is reached
 var day_2 = 1;

for (var i = 0.01; i <= 1000000000; i*= 2) {

    day_2+=1;
}

console.log("It takes " + day_2 + " days to reach the billion dollars");

///days untill servant has infinite money

var day_3 = 0;

for (var i = 0.01; i <= Infinity; i*= 2) { ///This if just Infinity, at least conceptually

   day_3+=1;
}

console.log("It takes " + day_3 + " days to reach the Infinity dollars");

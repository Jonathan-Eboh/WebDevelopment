/*Simply function to tell time
Create a program that will tell you the time.

With the following variables...

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";
Copy
...your program should print "It's almost 9 in the morning"

And when changed to...

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";
Copy
...your program should print "It's just after 7 in the evening"

Challenge:
If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
AM / PM, "in the morning", "in the evening",
HINT

You can add as many items into console.log as you need (They will be separated with spaces)

Example:

var person = "Jack";
var me = "Jill";
console.log("Hello", person, "I am", me, ".");
// Hello Jack I am Jill.
Copy
Bonus (Only If You Have Time):
Add functionality for "quarter after", "half past", "5 after" ...
Distinguish between "in the afternoon", "at night", "noon", "midnight" ...
*/






/*STEPS
-create function that takes in three arguments, HOUR, MINUTE, PERIOD
-check the time see if within 10 mins of next hour
    if yes print "Its almost" + (HOUR+1) in the morning

-check to see if minutes = 15 and check to see if PERIOD = am or pm
    if yes print "its just after" + HOUR + "in the" + PERIOD(am = morning/pm = evening)

-check to see if minutes = >=30
    if yes say "Soon it will be" + (HOUR + 1) "O'clock"
    if no but still greater than 15 "its almost,half past" + HOUR
    make similar things for 15 minutes and 5 minutes
-check hour within a predefined time domain
    depending on the time augment the print stament to include
    "in the afternoon" / "at night", "noon", "midnight"

    moring = 12:01am to 11:59am
    noon = 12:00pm if(HOUR = 12 %% MINUTE = 0){}
    afternoon = 12:01 to 7:00pm
    nighttime = 7:01 to 11:59pm
    midnight = 12:00pm

*/

console.log("cat");

function timeOfDay(HOUR,MINUTE,PERIOD){
///the following line breaks if you pass in 12 for the hour it gives back 13 (which isnt exactly wrong its just the only part of the porgram that would be using military time.)

    if((60 - MINUTE) <= 10 && PERIOD == "AM" || PERIOD == "am"){ ///there also might be a problem with this line regarding minutes being 0

        console.log("Its almost " + (HOUR+1) + PERIOD,"in the morning");

    }else if ((60 - MINUTE) <= 10 && PERIOD == "PM" || PERIOD == "pm" ) {

        console.log("Its almost " + (HOUR+1) + PERIOD);

    }

///check for part of day______________________________________________________

///check for
console.log("dog"); ///why does this print after bat?


    if (((HOUR >= 7 && HOUR <= 11) && (MINUTE > 0 && MINUTE <= 59) ) && PERIOD =="am" || PERIOD =="AM") {

        console.log("its currently morning");

    }else if((HOUR === 12 && MINUTE === 0) && (PERIOD == "PM" || PERIOD == "pm") ){

        console.log("its currently noon");

///CHECK FOR NOON

    }else if ((HOUR === 12 && MINUTE === 0) && (PERIOD == "AM" || PERIOD == "am" )) {

        console.log("its currently midmignt");

///CHECK FOR MIDNIGHT

    }else if (((HOUR >= 7 && HOUR <= 11) && (MINUTE > 0 && MINUTE <= 59) ) && PERIOD =="pm" || PERIOD =="PM"){

        console.log("its nighttime");

    }

}

console.log("bat");

timeOfDay(11,20,"pm");

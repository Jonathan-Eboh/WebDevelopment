/*

 Using a while loop...


While You Wait
Create a birthday countdown.

var daysUntilMyBirthday = 60;
Copy
For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, print a message sound excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY HAVE PARTY!

60 days until my birthday. Such a long time... :(
59 days until my birthday. Such a long time... :(
58 days until my birthday. Such a long time... :(
2 DAYS UNTIL MY BIRTHDAY!!!
1 DAY UNTIL MY BIRTHDAY!!!
♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«

*/




var daysUntilMyBirthday = 60;

while(daysUntilMyBirthday > 0){

    if (daysUntilMyBirthday >= 30) {

        console.log("Such a long time");

    }else if (daysUntilMyBirthday > 5 && daysUntilMyBirthday <= 29 ) {

        console.log("getting closer");

    }else if (daysUntilMyBirthday <=  5) {

        console.log("SO CLOSE!!!");
    }

    daysUntilMyBirthday--;
}

console.log("ITS YOUR BIRTHDAY!!!");
console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•* \n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪ \n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");

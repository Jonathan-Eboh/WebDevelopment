/*Let's play the slots!

Make a function that takes a number of quarters (1 quarter = 1 game).

There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 coins - use Math.random and Math.floor to pick a random number of coins).

While the user still has quarters, use Math.random to determine if they won.

If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).

Return 0 if all the quarters were wasted.

Bonus (Only If You Have Time):

Let the user pass the number they are willing to leave with
(ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)
*/

//1 quater = 1 game
var rand = (Math.trunc(Math.random() * 100));
rand = (Math.trunc(Math.random() * 100));

// var games = 10;

function gamble(games) {

    for (var i = games; i >=0; --i) {

        if ((Math.trunc(Math.random() * 100) === 1 )) {
            var payout= Math.trunc(Math.random() * 51)+50;
            console.log("You're a winner your earning are " + (i + payout) + " coins");
            return (i + payout);
        }


    }

    console.log("You're a loser.");

}

gamble(1000);

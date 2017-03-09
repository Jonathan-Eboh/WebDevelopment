//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
'use strict'
function sumLoop(x,y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum+=i;
    }
    console.log(sum);
    return;
}

sumLoop(5,7);
//-----------------------------------------

//Write a loop that will go through an array, find the minimum value, and then return it
function minInArr(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    console.log("This is the minimum value in your array:", min);
    return;
}

let arrayOne = [4,8,3,9,7];

minInArr(arrayOne);
//------------------------------------------


function avgInArr(arr) {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    avg = sum/arr.length;
    console.log("The average value of the passed in arrary is:",avg);
    return;
}

avgInArr(arrayOne);
//------------------------------------------
// re writing the above functions and anonymous functions that are stored in variables
var a = function (x,y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum+=i;
    }
    console.log(sum);
    return;
}

var b = function (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    console.log("This is the minimum value in your array:", min);
    return;
}

var c = function (arr) {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    avg = sum/arr.length;
    console.log("The average value of the passed in arrary is:",avg);
    return;
}
//----------------------------------------------------------------
//re writing the above functions as methods of an object
var object = {
    sumLoop :  function (x,y) {
        let sum = 0;
        for (let i = x; i <= y; i++) {
            sum+=i;
        }
        console.log(sum);
        return;
    },
    minInArr : function (arr) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }

        }
        console.log("This is the minimum value in your array:", min);
        return;
    },
    avgInArr: function (arr) {
        let avg = 0;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum+= arr[i];
        }
        avg = sum/arr.length;
        console.log("The average value of the passed in arrary is:",avg);
        return;
    }


};


//-----------------------------------------------------------------------------





var person = {
    name: "Jon Eboh",
    distance_traveled: 0,
    say_name:  function () {
        console.log(person.name);
        return; // returns undefined
    },
    say_something: function (param) {
        console.log(person.name + " says " + param);
        return;
    },
    walk: function () {
       console.log(person.name + " is walking ")
       person.distance_traveled += 3;
       console.log(person.distance_traveled);
   },
    run: function () {
       console.log(person.name + " is running ")
       person.distance_traveled += 10;
       console.log(person.distance_traveled);
   },
    crawl: function () {
       console.log(person.name + " is crawling ")
       person.distance_traveled += 1;
       console.log(person.distance_traveled);
   },
};



//
// saySomething("I am cool!");
console.log(person.say_name());
console.log(person.say_something("I am cool!"));
person.walk();
person.run();
person.crawl();

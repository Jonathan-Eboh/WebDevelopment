function runningLogger() {
    console.log("I am running!");
}
runningLogger();
//----------------------
function multiplyByTen(num) {
    return num * 10;
}

console.log(multiplyByTen(5));
//----------------------

function stringReturnOne() {
    console.log("String one!");
    return "return one";
}
function stringReturnTwo() {
    console.log("String two!");
    return "return_two";
}

// stringReturnOne();
// stringReturnTwo();
//----------------------------
function caller(param) {
    if (typeof(param) === 'function'){
        param();
    }
}

// caller(runningLogger());
//-----------------------------------------
//The code below prints out the result of the function as well as what it returns
//Do we want it to just print the return?
function myDoubleConsoleLog(param1, param2) {
    if (typeof(param1) === 'function' && typeof(param2) === 'function'){
        console.log(param1());
        console.log(param2());
    }
}

// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
//-----------------------------------
function caller2(param) {
    console.log("Starting...");
    var wait = setTimeout(function(){
        if (typeof(param) == "function") {
            param();

        }
    }, 10000);
    console.log("Ending...?");
    return "Interesting!";
}
/*
var wait;
setTimeout


wait = setTimeout(function(){
    if (typeof(param) == "function") {
        param();
    }
}, 2000);
console.log("Starting...");
console.log("Ending...?");
*/

caller2(myDoubleConsoleLog(stringReturnOne(), stringReturnTwo()));

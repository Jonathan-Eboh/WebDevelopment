/*
Fancy Array
Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

[ "James", "Jill", "Jane", "Jack" ]
Let's make it look fancy! Write a function that will make it print like:

0 -> James
1 -> Jill
2 -> Jane
3 -> Jack
Bonus (Only If You Have Time):

Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
Have an extra parameter reversed. If the user passes true, print the elements in reverse order
*/






// var arr = [2,4,6,8,777];
// var last = arr.pop(); /// pop() grabs AND returns the last value of the array
// console.log(last);

var arrNames = [ "James", "Jill", "Jane", "Jack" ];

function fancyArray(arr,sym,reversed = false) { //ignore this

    if (reversed === true) {
        for (var j = arr.length - 1; j >= 0; j--) {

            console.log(j + sym + arr[j]);

        }
    }else {

        for (var i = 0; i < arr.length; i++) {

            console.log(i + sym + arr[i]);

        }
    }
}

fancyArray(arrNames,"->",false);
fancyArray(arrNames,"->",true);

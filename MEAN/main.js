x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}
x.push(100);
console.log(x);

x = ["hello", "world", "JavaScript is Fun"];
console.log(x);

let sum = 0;
for (let i = 0; i < 500; i++) {
     sum += i;
}
console.log(sum);

y = [1, 5, 90, 25, -3, 0];
let min = y[0];
let avg = 0;
sumY = 0;
for (let i = 0; i < y.length; i++) {
    if (y[i] < min) {
        min = y[i];

    }
    sumY += y[i];
}
avg = sumY/y.length;
console.log(min, avg);

let newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (let key in newNinja){
    if (newNinja.hasOwnProperty(key)){
        console.log(key);
        console.log(newNinja[key]);
    }
}

'use strict'

function personConstructor(param_name) {
    let person = {
        name: param_name,
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
    // console.log("You made a person named "+ person.name+"!");
    return person
}
//
// personConstructor("Drake");
// console.log(personConstructor("Drake").name);
// console.log(personConstructor("Drake").say_something("Hello world"));
// console.log(personConstructor("Drake").walk());

function makeNinja(param_name, cohort) {
    let ninja = {
        name: param_name,
        cohort: cohort,
        // belt_level: belt,
        level_up: function (level) {
            let belt = "no belt";
            if (level === 1) {
                 belt = "Yellow";
            }else if (level === 2) {
                 belt = "Red"
            }else {
                 belt = "Black";
            }
            return belt;
        } ,
    }
    return ninja;
}



console.log(makeNinja("Jon","MEAN").name);
console.log(makeNinja("Jon","MEAN").cohort);
console.log(makeNinja("Jon","MEAN").level_up(3));

'use strict'

function NewPerson(name) { //Captital for constructor
    return {
        name : name,
        sayName: function(){
            console.log(name);
        }
    }
}

let Jay = NewPerson("Jay");
let Sara = NewPerson("Sara");
Jay.sayName();
Sara.sayName();







function Person(name) { //Captital for constructor
    this.name = name;//"this" is like "self" from Python EXCEPT for in javascript it refers to the scope
    //so if we were to use this in the global scope we would have a hugh object returned to us or
    //in the browser it would return the window object
    this.sayName = function () {
        console.log(name);
    }
}

let Jimmy = new Person("Jimmy") //Using the new keyword to make an instance of the Person constructor
Jimmy.sayName();

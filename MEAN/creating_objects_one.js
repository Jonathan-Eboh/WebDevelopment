'use strict'

function literalConstructor(name, age){
    let person = {}; //object literal
    person.name = name;
    person.age = age;
    return person; //object literal
}

let person = literalConstructor();



function instanceConstructor(name, age){
    this.name = name;
    this.age = age;
    return this; //dont need to return the "this" keyword there because the "new" keyword does that implicitly
}

let person2 = new instanceConstructor();


//---------------------------------------------
//How to do this is javascript using object literals
function VehicleConstructor(name,numWheels,numPassengers) {

    let vehicle = {};//object literal

    vehicle.name = name;
    vehicle.numWheels = numWheels;
    vehicle.numPassengers = numPassengers;

    vehicle.makeNoise = function () {
        console.log("LOUD NOISES!!!");
    }
    return vehicle;//returns object literal
}


let fastCar = VehicleConstructor("Hot Rod",4,2);


fastCar.makeNoise();
console.log(fastCar.name);
console.log(fastCar.numWheels);
console.log(fastCar.numPassengers);

//------------------------------------------------
//JavaScript OOP method of doing this
function VehicleInstanceConstructor(name, numWheels, numPassengers, speed) { //speed new here
    let distance_travelled = 0; //private variable this new too
    let updateDistanceTravelled = function () { //new
        distance_travelled += speed;
        console.log("The distance you have travelled so far is " + distance_travelled);
    }
    //Public variable

    this.name = name;
    this.numWheels = numWheels;
    this.numPassengers = numPassengers;
    this.speed = speed; //new
    this.makeNoise = function () {
        console.log("LOUDER NOISES!!!");
    }
    this.move = function () { //new as well
        updateDistanceTravelled();
        this.makeNoise();
    }
    this.checkMiles = function () { //new
        console.log(distance_travelled);
    }
    return;
}
//USEING A PROTOTYPE----------------------------------------------------------
VehicleInstanceConstructor.prototype.generateVIN = function () {

    console.log("The VIN number for your "+ this.name + " is : " + Math.floor(((Math.random() * (10000000000000000 - 0 + 1)) + 0)));

    return this;
}

let fastCar2 = new VehicleInstanceConstructor("Hotter Rod", 4, 2,60);
fastCar2.makeNoise();
console.log(fastCar2.name);
console.log(fastCar2.numWheels);
console.log(fastCar2.numPassengers);

// console.log(fastCar2.speed,"cat");
fastCar2.move();
fastCar2.checkMiles();
fastCar2.generateVIN(); //ENVOKING THE PROTOTYPE---------------------------------

//------------------------------------------------------
//BIKE

let bike = new VehicleInstanceConstructor("Nice Bike",2,1,10);
bike.makeNoise = function () {
    console.log("Ring Ring");
};
bike.makeNoise();
console.log(bike.name);
console.log(bike.numWheels);
console.log(bike.numPassengers);
bike.generateVIN();

//------------------------------------------------------
//SEDAN


let sedan = new VehicleInstanceConstructor("Sedan", 4, 2,50);
sedan.makeNoise = function () {
    console.log("Honk Honk");
};
sedan.makeNoise();
console.log(sedan.name);
console.log(sedan.numWheels);
console.log(sedan.numPassengers);
sedan.generateVIN();


//------------------------------------------------------
//BUS

let bus = new VehicleInstanceConstructor("bus", 4, 2,20);
bus.makeNoise = function () {
    console.log("LOUD BUS NOISES!");
};
bus.makeNoise();
bus.pickUp = function (passengers) {
    this.numPassengers += passengers;
    console.log("This bus now has " + this.numPassengers + " onboard!");
}
bus.pickUp(5);
console.log(bus.name);
console.log(bus.numWheels);
console.log(bus.numPassengers);
bus.pickUp(2);
bus.generateVIN();


// console.log(Math.floor(((Math.random() * (10000000000000000 - 0 + 1)) + 0)));
// console.log(Math.floor(((Math.random() * (10000000000000000 - 0 + 1)) + 0)));
// console.log(Math.floor(((Math.random() * (10000000000000000 - 0 + 1)) + 0)));
// console.log(Math.floor(((Math.random() * (10000000000000000 - 0 + 1)) + 0)));

/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(edible){
  if(this.stomach.length <10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

const personOne = new Person('Jonathan', 32)

// testing it out

console.log(personOne.toString());

personOne.eat('Spicy Tuna Roll')
personOne.eat('Pork Taco')
personOne.eat('Salad')

console.log(personOne.stomach);

personOne.poop();

console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// constructor function
function Car(model, milesPerGallon){
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
// method calling toString
Car.prototype.toString = function(){
  return `${this.model} has ${this.milesPerGallon} MPH.`
} 

// create a .fill(gallons) method
Car.prototype.fill = function(gallons){
  this.tank += gallons;
  }

// create a car
const carOne = new Car('Ford', 27)

console.log(carOne.toString());

carOne.fill(20);

console.log(carOne.tank);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// Construction Function, what's your junction?
function Baby(name, age, favoriteToy){
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
// Baby Prototypal Inheritance
Baby.prototype = Object.create(Person.prototype);

const babyOne = new Baby('Bodhi', 1, 'Stuffed Mouse');

Baby.prototype.play = function(){
  return `Playing with a ${this.favoriteToy}`;
}

console.log(babyOne.play);


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window or Global Binding is when "this" is applicable to the whole of the window, normally when no other rules apply.
  2. Implicit Binding is the most common. "This" then will refer to the left of the dot in dot notation in objects with methods only. 
  3. New Binding uses the keyword "new" to create a new object and "this" will indicate that new object. 
  4. Explicit binding uses various methods: .call invokes the function and can pass in arguments one at a time; .apply also invokes the function and can pass in arguments as arrays; and .bind does not invoke automatically, but rather returns a new function that can be invoked at a later time. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

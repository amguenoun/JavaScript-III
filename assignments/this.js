/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - this points to the global object 
* 2. Implicit binding - this points to the object to the left of the function being called
* 3. New binding - this points to the object created by the constructor
* 4. Explicit binding - this points to the argument of the call or bind function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const dog = {
    sound: "Woof",
    bark: function () {
        console.log(`${this.sound} ${this.sound}`);
    }
}

dog.bark();

// Principle 3
// code example for New Binding
function Animal(species, name) {
    this.species = species;
    this.name = name;
    this.speak = function () {
        console.log(`I am a ${this.species} named ${this.name}`);
    };
}

const cat = new Animal("cat", "Leo");
cat.speak();

// Principle 4
// code example for Explicit Binding
let parrot = {
    name: "Lex",
}

function cry() {
    console.log(`My name is ${this.name} and I am sad`);
}

cry.call(parrot);

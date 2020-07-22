const myString = "hi you!";
console.log(myString);

const myArray = [myString, "a second string"];
console.log(myArray);

const myPersonArray = [
    "henry",
    32,
    ["Program", "Hike", "Watch Movies"]
];
console.log(myPersonArray[2]); //hobbies
/**
 * JavaScript Objects
 * 
 * JSON - JavaScript Object Notation
 */
const myPersonObject = { //JS object (not necessarily JSON)
    "name": "Henry",
    "age": 32,
    "hobbies": ["Program", "Hike", "Watch Movies"]
};
console.log("My name is: " + myPersonObject.name);
console.log("I am " + myPersonObject.age + " years old.");
console.log("I like to " + myPersonObject.hobbies);


// Output JavaScript object...
console.log(myPersonObject);
const validJSONString = JSON.stringify(myPersonObject);
// Output perfectly valid JSON string...
console.log(validJSONString); // This can be interpreted by other programming languages / programs!
// JSON helps us communicate in a universal format/standard.

/**
 * class
 * 
 * Classes are like blue prints. We make a guide /definintions on what each person will have inside.
 */
class Person {
    //we can use constructor to set base properties for our objects (name, age, hobbies)
    constructor(name = "", age = 0, hobbies = [])// default values parameters
    {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies; // current person we are one
    }
    //we can add methods to a class, they are like "functions" but are run from objects instead
    sayHello()//method
    {//crEATe an element
        const helloElement = document.createElement("p");
        //fill in the text of element (using template literal.)
        helloElement.textContent = `Hello, my name is ${this.name}!`;;
        // add the new element to the body of our webpage
        document.body.appendChild(helloElement);
    }
    birthday()// increments age property by one, via our 'birthday' method
    {
        this.age = this.age + 1;// make sure to use this to refer to current object
    }
    addHobbie(hobby = "") // parameter with default value
    {//check if hobby is filled in
        if (hobby.length > 0) //greater than blank string
        {// if its filled push it to array
            this.hobbies.push( hobby ); //push new hobbie on listy
        }// if its not filled say so in console
        else {
            console.log("sorry, empty hobby. Add one!");

        }
    }
}

// let's make some peeps
const jim = new Person;
console.log(jim);
jim.sayHello(); //is a set of instructions, call upon a method to execute

//when we pass arguments, the default parameters are over written
const Sarah = new Person("Sarah", 45, ["sleep", "drawing"]); //passing through arguments
console.log(Sarah);
Sarah.height = "7'"; //we /can /update and add new properties (but should we probably not; its only update the one individual)
console.log(Sarah);
Sarah.sayHello();

//running the bday method
Sarah.birthday();
console.log("sarah is now " + Sarah.age + " years old")
// Values kept inside an object are considered "properties."
// Sets of instructions kept inside an object are considered "methods." 
Sarah.addHobbie("yoga");
console.log( Sarah.hobbies );
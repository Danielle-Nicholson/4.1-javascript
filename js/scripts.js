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

}

// let's make some peeps
const jim = new Person;
console.log(jim);

//when we pass arguments, the default parameters are over written
const Sarah = new Person("Sarah" ,45,["sleep", "drawing"]); //passing through arguments
console.log(Sarah);
Sarah.height = "7'"; //we /can /update and add new properties (but should we probably not; its only update the one individual)
console.log(Sarah);

 
// Values kept inside an object are considered "properties."
// Sets of instructions kept inside an object are considered "methods." 
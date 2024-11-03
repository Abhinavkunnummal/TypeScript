// Setting Types
var age = 20;
var name = "John";
var isStudent = true;
// Types in Typescipt
/*Implicit vs Explicit Types
 Implicit: TypeScript can infer types based on the assigned value.
*/
var name = "John"; // TypeScript infers type as string
//Explicit: You can manually specify the type.
var name = "John";
/*Any Type
The any type is a way to opt-out of type checking:*/
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
/*Unknown Type
The unknown type is similar to any, but safer because it's not legal to do anything with an unknown value:*/
var value = 10;
value = true;
value = "hello";
if (typeof value === "string") {
    // console.log(value.toUpperCase()); // OK
}
/*Never Type
The never type represents the type of values that never occur:*/
function error(message) {
    throw new Error(message);
}
/*Enum
Enums allow us to define a set of named constants:*/
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.green;
/**Tuple
Tuples allow you to express an array with a fixed number of elements whose types are known: */
var x;
x = ["hello", 10]; // OK
x = [10, "hello"]; // ERROR
/* Objects
Object Types
You can define the shape of an object using object types:*/
var person = { name: 'John', age: 30 };
/*Methods
Objects can have methods:*/
var calculator = {
    add: function (x, y) {
        return x + y;
    }
};
// console.log(calculator.add(5,2)); // Example usage
/**Specific Values
You can specify that an object property must have a specific value: */
var config = {
    apiKey: "abc123",
    debug: true,
};
// console.log(config.apiKey);
/**Return Type
You can specify the return type of a function: */
function greet() {
    return "hello, World";
}
var Point = { x: 10, y: 20 };
// console.log(Point);
/**Union Types
Union types allow a value to be one of several types: */
var result;
result = 10; //OK
result = "success"; //OK
result = true; // Error
var teamLead = {
    name: "John",
    startDate: new Date(),
    department: "IT"
};
console.log(teamLead);

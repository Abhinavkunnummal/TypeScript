var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(teamLead);
/**Literal Types
Literal types allow you to specify exact values: */
var direction;
direction = 'north'; //OK
direction = 'northeast'; //Error
/**Nullable Types
You can explicitly allow null or undefined: */
var name = 'John';
name = null; //ok
var age;
function greet(name, greeting) {
    // Optional parameter
    console.log(greeting ? "".concat(greeting, ", ").concat(name, "!") : "Hello, ".concat(name, "!"));
}
var user = { name: 'John', age: 30 };
var user = { name: 'John', age: 30, email: 'john@example.com' };
var user = { name: 'john', age: 30, email: 'john@example.com', employeeId: 101 };
// console.log(user);
/**Classes
Classes in TypeScript are similar to those in other object-oriented languages: */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " moved ").concat(distance, "m."));
    };
    return Animal;
}());
var an = new Animal('Ant');
// console.log(an);
// an.move(10)
/**Modifiers
TypeScript supports access modifiers:
public (default)
private
protected*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
// const person = new Person("Alice");
// console.log(person.getName()); // Output: Alice
/**Getters and Setters
You can use getters and setters to intercept access to a member of an object: */
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = '';
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// const employee = new Employee();
// employee.fullName = 'Alice Johnson';
// console.log(employee.fullName); // Output: Alice Johnson
/**Abstract Classes
Abstract classes are base classes from which other classes may be derived: */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming the earth');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Bark');
    };
    return Dog;
}(Animal));
// const dog = new Dog();
// dog.makeSound(); // Output: Bark
// dog.move();      // Output: roaming the earth
/**Method Overriding
Derived classes can override methods from their base class: */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("The animal moves around.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!"); // Overridden method
    };
    Dog.prototype.move = function () {
        _super.prototype.move.call(this); // Calls the base class move method
        console.log("The dog runs swiftly."); // Additional behavior
    };
    return Dog;
}(Animal));
// const dog = new Dog();
// dog.makeSound(); // Output: Woof! Woof!
// dog.move();      // Output: The animal moves around.
//                  //         The dog runs swiftly.
/**Difference Between Class and Abstract Class
Regular classes can be instantiated, while abstract classes cannot.
Abstract classes may contain abstract methods (without implementation) that must be implemented in derived classes. */
/**Generics
Generics allow you to write reusable, type-safe code:
Generics can be used with functions, classes, and interfaces to create reusable components.*/
function identity(arg) {
    return arg;
}
var output = identity("mystring");

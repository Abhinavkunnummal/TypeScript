// Setting Types
let age: number = 20;
let name: string = "John";
let isStudent: boolean = true;

// Types in Typescipt
/*Implicit vs Explicit Types
 Implicit: TypeScript can infer types based on the assigned value.
*/
let name = "John"; // TypeScript infers type as string
//Explicit: You can manually specify the type.
let name: string = "John";

/*Any Type
The any type is a way to opt-out of type checking:*/
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

/*Unknown Type
The unknown type is similar to any, but safer because it's not legal to do anything with an unknown value:*/
let value: unknown = 10;
value = true;
value = "hello";

if (typeof value === "string") {
    // console.log(value.toUpperCase()); // OK
}

/*Never Type
The never type represents the type of values that never occur:*/
function error(message: string): never {
    throw new Error(message);
}

/*Enum
Enums allow us to define a set of named constants:*/
enum Color{
    red,
    green,
    blue,
}
let c:Color=Color.green;

/**Tuple
Tuples allow you to express an array with a fixed number of elements whose types are known: */
let x:[string,number];
x=["hello",10]; // OK
x=[10,"hello"]; // ERROR

/* Objects
Object Types
You can define the shape of an object using object types:*/
let person:{name:string,age:number}={name:'John',age:30}

/*Methods
Objects can have methods:*/
const calculator={
    add(x:number,y:number):number{
        return x+y;
    }
}
// console.log(calculator.add(5,2)); // Example usage


/**Specific Values
You can specify that an object property must have a specific value: */
let config:{readonly apiKey:string,debug:boolean}={
    apiKey:"abc123",
    debug:true,
};
// console.log(config.apiKey);


/**Return Type
You can specify the return type of a function: */
function greet():string{
    return "hello, World";
}
// console.log(greet());


/**Type Aliases
Type aliases create a new name for a type: */
type point={
    x:number;
    y:number;
};
let Point:point={x:10,y:20};
// console.log(Point);

/**Union Types
Union types allow a value to be one of several types: */
let result:number|string;
result=10; //OK
result="success"; //OK
result=true; // Error


/**Type Intersection
Intersection types combine multiple types into one: */
type Employee={
    name:string,
    startDate:Date
};
type Manager={
    name:string,
    department:string
};
type TeamLead=Employee&Manager;
let teamLead:TeamLead={
    name:"John",
    startDate:new Date(),
    department:"IT"
};
// console.log(teamLead);


/**Literal Types
Literal types allow you to specify exact values: */
let direction:"north"|"south"|"east"|"west";
direction='north'; //OK
direction='northeast'; //Error


/**Nullable Types
You can explicitly allow null or undefined: */
let name:string|null='John';
name=null; //ok
let age:number|undefined;
// console.log(age); //undefined


/**Optional Properties, Elements, and Calls
You can mark properties, elements, or function parameters as optional using ?: */
type User = {
    name: string;
    age?: number; // Optional property
};

function greet(name: string, greeting?: string) {
    // Optional parameter
    console.log(greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`);
}
// const user1: User = { name: "Alice" };
// const user2: User = { name: "Bob", age: 30 };

// greet(user1.name); // Output: Hello, Alice!
// greet(user2.name, "Hi"); // Output: Hi, Bob!


/**Interfaces
Interfaces define the structure that objects must adhere to: */
interface Person{
    name:string,
    age:number
}
let user:Person={name:'John',age:30}
// console.log(user);


/**Reopening Interfaces
You can add new properties to an existing interface: */
interface Person{
    email:string;
}
let user:Person={name:'John',age:30,email:'john@example.com'};
// console.log(user);


/**Interface Inheritance
Interfaces can extend other interfaces: */
interface Employee extends Person{
    employeeId:number
}
let user:Person={name:'john',age:30,email:'john@example.com',employeeId:101}
// console.log(user);


/**Classes
Classes in TypeScript are similar to those in other object-oriented languages: */
class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    move(distance:number=0){
        console.log(`${this.name} moved ${distance}m.`); 
    }
}
let an=new Animal('Ant');
// console.log(an);
// an.move(10)


/**Modifiers
TypeScript supports access modifiers: 
public (default)
private
protected*/
class Person {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
// const person = new Person("Alice");
// console.log(person.getName()); // Output: Alice


/**Getters and Setters
You can use getters and setters to intercept access to a member of an object: */
class Employee{
    private _fullName:string='';
    get fullName():string{
        return this._fullName;
    }
    set fullName(newName:string){
        this._fullName=newName
    }
}
// const employee = new Employee();
// employee.fullName = 'Alice Johnson';
// console.log(employee.fullName); // Output: Alice Johnson



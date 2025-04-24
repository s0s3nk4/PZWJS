// number
console.log("Zmienna typu number: ")
let age: number = 25
console.log(age);

// string
console.log("Zmienna typu string: ")
let s_name: string = "Anna";
console.log(s_name);

// boolean
console.log("Zmienna typu boolean: ")
let isStudent: boolean = true;
console.log(isStudent);

// array
console.log("Zmienna typu array: ")
let numbers: number[] = [1,2,3,4,5];
console.log(numbers);

// tuple
console.log("Zmienna typu tuple: ")
let user: [string, number] = ["John", 30];
console.log(user);

// enum
console.log("Zmienna typu enum: ")
enum Colors
{
    Red,
    Green,
    Blue
}
let favColor: Colors = Colors.Red;
console.log(favColor);

// any
console.log("Zmienna typu any: ")
let random: any = 50;
random = "Hello";
random = true;
console.log(random);

// void
console.log("Zmienna typu void: ")
function greet(): void
{
    console.log("Hello")
}
greet();

// undefined / null
console.log("Zmienna typu undefined / null: ")
let notDefined: undefined = undefined;
let empty: null = null;
console.log(notDefined);
console.log(empty);

// union
console.log("Zmienna typu union: ")
let id: string | number;
id = 2901;
console.log(id);
id = "S59101MS";
console.log(id);

// object
console.log("Zmienna typu object: ")
let obj_user: {name: string, age: number} = 
{
    name: "Matthew",
    age: 23
};
console.log(user);

// never
console.log("Zmienna typu never: ")
function throwError(message: string): never
{
    throw new Error(message);
}

// unknown
console.log("Zmienna typu unknown: ")
let unknown: unknown = "Hello";
if(typeof unknown === "string")
{
    console.log(unknown.toUpperCase());
}
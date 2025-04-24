// number
console.log("Zmienna typu number: ");
var age = 25;
console.log(age);
// string
console.log("Zmienna typu string: ");
var s_name = "Anna";
console.log(s_name);
// boolean
console.log("Zmienna typu boolean: ");
var isStudent = true;
console.log(isStudent);
// array
console.log("Zmienna typu array: ");
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// tuple
console.log("Zmienna typu tuple: ");
var user = ["John", 30];
console.log(user);
// enum
console.log("Zmienna typu enum: ");
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var favColor = Colors.Red;
console.log(favColor);
// any
console.log("Zmienna typu any: ");
var random = 50;
random = "Hello";
random = true;
console.log(random);
// void
console.log("Zmienna typu void: ");
function greet() {
    console.log("Hello");
}
greet();
// undefined / null
console.log("Zmienna typu undefined / null: ");
var notDefined = undefined;
var empty = null;
console.log(notDefined);
console.log(empty);
// union
console.log("Zmienna typu union: ");
var id;
id = 2901;
console.log(id);
id = "S59101MS";
console.log(id);
// object
console.log("Zmienna typu object: ");
var obj_user = {
    name: "Matthew",
    age: 23
};
console.log(user);
// never
console.log("Zmienna typu never: ");
function throwError(message) {
    throw new Error(message);
}
// unknown
console.log("Zmienna typu unknown: ");
var unknown = "Hello";
if (typeof unknown === "string") {
    console.log(unknown.toUpperCase());
}

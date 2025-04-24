function showPerson(person) {
    console.log("Name: ".concat(person.name));
    console.log("Surname: ".concat(person.surname));
    console.log("Age: ".concat(person.age));
    if (person.email) {
        console.log("Email: ".concat(person.email));
    }
}
var person1 = {
    name: "Mateusz",
    surname: "Sosna",
    age: 23
};
var person2 = {
    name: "Jan",
    surname: "Kowalski",
    age: 45,
    email: "jkowalski45@poczta.pl"
};
showPerson(person1);
showPerson(person2);

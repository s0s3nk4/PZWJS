interface Person
{
    name: string,
    surname: string,
    age: number;
    email?: string;
}

function showPerson(person: Person): void
{
    console.log(`Name: ${person.name}`);
    console.log(`Surname: ${person.surname}`);
    console.log(`Age: ${person.age}`);
    if(person.email)
    {
        console.log(`Email: ${person.email}`);
    }
}

const person1: Person = 
{
    name: "Mateusz",
    surname: "Sosna",
    age: 23
};

const person2: Person = 
{
    name: "Jan",
    surname: "Kowalski",
    age: 45,
    email: "jkowalski45@poczta.pl"
}

showPerson(person1);
showPerson(person2);
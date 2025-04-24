class PersonDatabase
{
    constructor()
    {
        this.people = [];
    }

    addPerson(person)
    {
        this.people.push(person);
        console.log("Added person: ", person);
    }

    removePerson(name)
    {
        this.people = this.people.filter(person => person.name !== name);
        console.log("Removed person: ", name);
    }

    showPeople()
    {
        console.log("People list: ", this.people);
        return this.people;
    }
}

const db = new PersonDatabase();
db.addPerson({name: "Mateusz", age: 18});
db.addPerson({name: "Marcin", age: 36});
db.showPeople();
db.removePerson("Marcin");
db.showPeople();
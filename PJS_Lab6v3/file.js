const { error } = require('console');
const fs = require('fs');
const path = require('path');

class FileDatabase
{
    constructor(filePath)
    {
        this.filePath = filePath;
        if(!fs.existsSync(filePath))
        {
            fs.writeFileSync(filePath, JSON.stringify([]));
        }
    }

    readData()
    {
        return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
    }

    writeData(data)
    {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    addPerson(person)
    {
        const people = this.readData();
        people.push(person);
        this.writeData(people);
        console.log("Added person: ", person);
    }

    removePerson(name)
    {
        const people = this.readData().filter(person => person.name !== name);
        this.writeData(people);
        console.log("Removed person: ", name);
    }

    showPeople()
    {
        const people = this.readData();
        console.log("People list: ", people);
        return people;
    }
}

const db = new FileDatabase(path.join(__dirname, 'people.join'));
db.addPerson({name: "Mateusz", age: 18});
db.addPerson({name: "Marcin", age: 36});
db.showPeople();
db.removePerson("Marcin");
db.showPeople();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/peopleDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const personSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

const Person = mongoose.model('Person', personSchema);

async function addPerson(person)
{
    const newPerson = new Person(person);
    await newPerson.save();
    console.log("Added person: ", person);    
}

async function removePerson(name)
{
    await Person.deleteOne({name});
    console.log("Removed person: ", name);    
}

async function showPeople()
{
    const people = await Person.find();
    console.log("Person list: ", people);
    return people;
}

(async() => 
{
    await addPerson({name: "Mateusz", age: 18});
    await addPerson({name: "Marcin", age: 36});
    await showPeople();
    await removePerson("Mateusz");
    await showPeople();
    mongoose.connection.close()
})();
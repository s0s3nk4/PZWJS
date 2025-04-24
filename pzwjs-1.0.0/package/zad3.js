let persons = [];

const database = JSON.stringify([
    {
        id: 1,
        imie: 'Jan',
        nazwisko: 'Kowalski',
        wiek: 30,
        miasto: 'Warszawa'
    },
    {
        id: 2,
        imie: 'Joanna',
        nazwisko: 'Kowalska',
        wiek: 28,
        miasto: 'Warszawa'
    },
    {
        id: 3,
        imie: 'Mateusz',
        nazwisko: 'Sosna',
        wiek: 23,
        miasto: 'Bestwinka'
    }
]);

function addPerson(id, imie, nazwisko, wiek, miasto)
{
    const person =
    {
        id: id,
        imie: imie,
        nazwisko: nazwisko,
        wiek: wiek, 
        miasto: miasto
    };
    persons.push(person);
}

const convert = JSON.parse(database)
console.log(database);
console.log(convert);

for(let i=0;i<convert.length;i++)
{
    console.log(`ID: ${convert[i].id}, Imie: ${convert[i].imie}, Nazwisko: ${convert[i].nazwisko}, Wiek: ${convert[i].wiek}, Miasto: ${convert[i].miasto}`);
}

persons.forEach(person =>
    {
        console.log(`ID: ${convert.id}, Imie: ${convert.imie}, Nazwisko: ${convert.nazwisko}, Wiek: ${convert.wiek}, Miasto: ${convert.miasto}`);
});

let convertString = JSON.stringify(convert);

console.log(convertString);
function createCounter(): () => number
{
    let counter: number = 0;

    return function (): number {
        counter += 1;
        return counter;
    };
}

const myCounter = createCounter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

function sum(...args: number[]): number
{
    return args.reduce((acc: number, cur: number) => acc + cur, 0);
}

console.log(sum());
console.log(sum(10, 20, 30)); 
console.log(sum(-5, 5, 10)); 

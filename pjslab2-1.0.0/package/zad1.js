function createCounter() {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    };
}
var myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

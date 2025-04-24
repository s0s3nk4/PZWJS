function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (acc, cur) { return acc + cur; }, 0);
}
console.log(sum());
console.log(sum(10, 20, 30));
console.log(sum(-5, 5, 10));

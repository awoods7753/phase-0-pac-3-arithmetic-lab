function add(x, y) {
    return x + y;
}

console.log(add(1, 80));

function subtract(x, y) {
    return x - y;
}

console.log(subtract(60, 40));

function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 3.4));

function divide(x, y) {
    return x / y;
}

console.log(divide(5 / 2.5));

number = 5;
function increment(number) {
    return number + 1;
}

console.log(increment);

function decrement(number) {
    return number - 1;
}

console.log(decrement);

function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt(5));

function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal(2.222));
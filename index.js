function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment(n) {
    return (n += 1);
}
function decrement(n) {
    return (n -= 1);
}
function makeInt(n) {
    let k = parseInt(n, 10);
    return k;
}
function preserveDecimal(n) {
    let z = parseFloat(n, 10);
    return z;
}
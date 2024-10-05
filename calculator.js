// problem no - 01 ===============================================

function sum(x, y) {
    return x+y;
}
function sub(x, y) {
    return x-y;
}
function mul(x, y) {
    return x*y;
}
function div(x, y) {
    return x/y;
}
let x = parseInt(prompt("take a user input: "));
let y = parseInt(prompt("take a another input: "));
let char = parseInt(prompt("which operation you want(+, -, *, /): "));
if (char = "+") {
    document.write("sum is : ", sum(x, y));
}
else if (char = "-") {
    document.write("sub is : ", sub(x, y));
}
else if (char = "*") {
    document.write("mul is : ", mul(x, y));
}
else {
    document.write("div is : ", div(x, y));
}
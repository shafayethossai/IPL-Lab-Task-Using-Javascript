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

// problem no - 02 ================================================

function convert(x) {
    let fahrenhit = (x * 9 / 5) + 32;
    return fahrenhit;
}
let celsius = parseInt(prompt("take s user input of celsius: "));

document.write("output is : ", convert(celsius));


// problem no - 03 ================================================

let arr = [];
let max_val = -1;

for (let i=0; i<5; i++) {
    let x = parseInt(prompt(""));
    arr.push(x);
}

for (let i=0; i<5; i++) {
    if (arr[i] > max_val) {
        max_val = arr[i];
    }
}
console.log("output : ", max_val);

// problem no - 04 ================================================

function pass(arr) {
    let even_arr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) {
            even_arr.push(arr[i]);
        }
    }
    return even_arr;
}
let arr = [];

for (let i=0; i<5; i++) {
    let x = parseInt(prompt(""));
    arr.push(x);
}
let array = pass(arr);
document.write(array);

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
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
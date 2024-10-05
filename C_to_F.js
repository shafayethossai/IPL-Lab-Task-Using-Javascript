// problem no - 02 ================================================

function convert(x) {
    let fahrenhit = (x * 9 / 5) + 32;
    return fahrenhit;
}
let celsius = parseInt(prompt("take s user input of celsius: "));

document.write("fahrenhit is : ", convert(celsius));
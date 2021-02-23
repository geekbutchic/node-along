const getInput = require("./get-input.js");
// const fizzy = require("./fizzy-backend.js");

const n = getInput();

if (n % 15 === 0) {
    console.log("FizzBuzz");
} else if (n % 5 === 0) {
    console.log("Buzz");
} else if (n % 3 === 0) {
    console.log("Fizz");
} else {
    console.log(n);
}

// const n = getInput();
// const answer = fizzy(n);
// console.log(answer);
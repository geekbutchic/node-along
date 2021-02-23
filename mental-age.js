const getInput = require("./get-input.js");
// Going to take in a number of persons mental age.
// 1. Take in users age and saves into a variable 
// 2. Divide by two and add three
// 3. Print out result

const userAge = getInput();

if (userAge === "--help") {
    console.log('This function returns your mental age.');
    console.log('Please enter your age after "node mental-age.js" and a space.');
}

const mentalAge = getInput() / 2 + 3;
// converts to a Number(userAge) so it doesn't concatenate
const ageNextYear = Number(userAge) + 1;

console.log("Your mental age is " + mentalAge + " years old.");
console.log("Next year you'll be " + ageNextYear + " years old.");
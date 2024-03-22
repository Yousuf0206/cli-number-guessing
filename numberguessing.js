#! usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user will guess a number
// compare user input with computer generated number
const random_number = Math.floor(Math.random() * 6 + 1);
const guess_number = await inquirer.prompt({
    name: "number",
    type: "number",
    message: "Please guess a number (1-6): "
});
if (random_number === guess_number.number)
    console.log("Your guess number is correct");
else
    (console.log("your number is not correct"));

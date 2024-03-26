#! /usr/bin/env node

// import inquirer from "inquirer";
// // computer will generate a random number

// // user will guess a number

// // compare user input with computer generated number

// const random_number =  Math.floor(Math.random() * 6 + 1)

// const guess_number = await inquirer.prompt({
//     name : "number",
//     type : "number",
//     message : "Please guess a number (1-6): "

// })

// if (random_number === guess_number.number)
// console.log ("Your guess number is correct")
// else (
//     console.log ("your number is not correct")
// )

import * as readline from 'readline';

// Create readline interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question
function askQuestion(question: string): Promise<string> {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (6 + 1));
}

// Main function for the number guessing game
async function numberGuessingGame() {
    const minNumber = 1;
    const maxNumber = 6;
    const secretNumber = generateRandomNumber(minNumber, maxNumber);
    let guessAttempts = 0;

    console.log(`Guess the number between ${minNumber} and ${maxNumber}`);

    while (true) {
        const guess = parseInt(await askQuestion("Enter your guess: "));
        guessAttempts++;

        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the number in ${guessAttempts} attempts.`);
            break;
        } else {
            console.log("Incorrect guess. Try again.");
        }
    }
}

// Main function to run the loop
async function main() {
    let terminateLoop = false;

    while (!terminateLoop) {
        await numberGuessingGame();

        const continueAnswer = await askQuestion("Do you want to continue? (y/n): ");
        if (continueAnswer.toLowerCase() !== 'y') {
            terminateLoop = true;
        }
    }

    // Close the readline interface
    rl.close();
}

// Call the main function to start the loop
main().catch((error) => {
    console.error('An error occurred:', error);
});

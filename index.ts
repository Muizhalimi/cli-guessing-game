#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number -done
// 2) User input for guessing number -done
// 3) compare user input with computer generated number and show results - done


const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed the correct number.");
} else {
    console.log("You guessed the wrong number");
}


#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will Generate A Random Number
// 2) User Input For Quessing Number
// 3) Compare User Input with Computer Generated Number And Show Result
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Plase guess a number between 1 to 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
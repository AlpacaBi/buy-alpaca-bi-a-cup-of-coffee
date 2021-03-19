
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const chalk = require("chalk")
const { clearScreen } = require('./utils');
const action = require('./action');


clearScreen()

const questions1 = [
    {
        type: "list",
        name: "language",
        message: `选择你的语言? ${chalk.green.bold("/")} Select your language?`,
        choices: [
            {
                name: `中文`,
                value: "chinese"
            },
            {
                name: `English`,
                value: "english"
            }
        ]
    }
];

const main = async() => {
    const answer = await prompt(questions1)
    const language = answer.language
    action(language)
}

main()
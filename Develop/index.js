// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = require('inquirer');
    .prompt([
        {
            type: "input",
            message: "What is the app for?",
            name: "purpose",

        },
        {
            type: "input",
            message: "How to use the app?",
            name: "use",
        },
        {
            type: "input",
            message: "How to install the app?",
            name: "install",
        },
        {
            type: "input",
            message: "How to report issues?",
            name: "issues",
        },
        {
            type: "input",
            message: "How to make contributions?",
            name: "contribute",
        }
])
.then(answers => {
    JSON.stringify(answers);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() => {
    promptUser()
    .then((answers) => writeFileAsync('README.md',generateMD(answers)))
};

// Function call to initialize app
init();

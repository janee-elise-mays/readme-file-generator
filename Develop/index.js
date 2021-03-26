// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions =
    inquirer.prompt([
        { type: "input", message: "What is the title of the project?", name: "title", },
        { type: "input", message: "What is the app for?", name: "purpose", },
        { type: "input", message: "How to use the app?", name: "use", },
        { type: "input", message: "How to install the app?", name: "install", },
        { type: "input", message: "How to report issues?", name: "issues", },
        { type: "input", message: "How to make contributions?", name: "contribute",}
    ])
        .then(answers => {
            const readme = createREADME(answers);
            fs.writeFileSync('./readme.md', readme, (error) => { if (error) console.log("Opps, try again") });
        });
// JSON.stringify(answers);
// console.log(answers);

// TODO: Create a function to write README file
function writeToFile({ answers }) {
    // fileName, data
    return
    < !DOCTYPE md >

}

// TODO: Create a function to initialize app
// function init() => {
//     promptUser()
//     .then((answers) => writeFileAsync('README.md',generateMD(answers)))
// };

// Function call to initialize app
// init();

// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions =
    inquirer.prompt([
        { type: "input", message: "What is the title of the project?", name: "title", },
        { type: "input", message: "Briefly describe the project.", name: "description", },
        { type: "input", message: "How to install the app?", name: "install", },
        { type: "input", message: "How to use the app?", name: "use", },
        { type: "input", message: "How to make contributions?", name: "contribute",},
        { type: "input", message: "How to report issues?", name: "issues", },
        { type: "input", message: "What is your github username?", name: "username", },
        { type: "input", message: "What is your email?", name: "email", },
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

    <h1># ${answers.title}</h1>
    <h1># Table of Contents</h1>
    <p>Description</p>
    <p>Installation</p>
    <p>Usage</p>
    <p>Contributions</p>
    <p>Tests</p>
    <p>Questions</p>
    <h1># Description</h1>
    <p> ${answers.description}</p>
    <h1># Installation</h1>
    <p> ${answers.install}</p>
    <h1># Usage</h1>
    <p> ${answers.use}</p>
    <h1># Contribution</h1>
    <p> ${answers.contribute}</p>
    <h1># Tests</h1>
    <h1># Questions</h1>
    <p> ${answers.purpose}</p>
    


}

// TODO: Create a function to initialize app
// function init() => {
//     promptUser()
//     .then((answers) => writeFileAsync('README.md',generateMD(answers)))
// };

// Function call to initialize app
init();

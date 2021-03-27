// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const createMD = require('./utils/generateMarkdown');
// const utils = require('utils');
// TODO: Create an array of questions for user input
const questions =
    inquirer.prompt([
        { type: "input", 
        message: "What is the title of the project?", 
        name: "title", 
        },
        { 
            type: "input", 
            message: "Briefly describe the project.", 
            name: "description", 
        },
        { 
            type: "input",
             message: "How to install the project?", 
             name: "install", 
        },
        { 
            type: "input",
             message: "How to use the project?", 
             name: "use", 
        },
        { 
            type: "input", 
            message: "How to make contributions?", 
            name: "contribute",
        },
        { 
            type: "input", 
            message: "How to report issues?", 
            name: "issues", 
        },
        { 
            type: "checkbox", 
            message: "Select the license you used.",
            name: "license", 
            choices:[ "Mozilla Public License 2.0", "Apache License 2.0", "MIT License"],
        },
        { 
            type: "input", 
            message: "What is your github username?", 
            name: "username", 
        },
        { 
            type: "input", 
            message: "What is your email?", 
            name: "email", 
        },
    ])
    .then(answers => {
        const readme = createMD(answers);
        writeToFile(readme)
    })
    
    function writeToFile(content) {
        fs.writeFileSync('./readme.md', content, (error) => { if (error) console.log("Opps, try again") });
    }   
    


// Function call to initialize app
// init();

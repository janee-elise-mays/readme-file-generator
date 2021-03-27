// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
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
        JSON.stringify(answers);
    })

function writeToFile(answers) {
if (answers.license == "Mozilla Public License 2.0"){
    answers.license = "![NPM](https://img.shields.io/npm/l/mozilla?label=Mozilla%20Public%20License%202.0)"
}else if(answers.license == "Apache License 2.0"){
    answers.license = "[![NPM](https://img.shields.io/npm/l/apache?color=blue&label=apache%202.0))]"
}else(answers.license === "MIT License")
    answers.license = "![NPM](https://img.shields.io/npm/l/mit?color=blue&label=MIT%20License%202.0)"

    return '# ${answers.title}


    ## Description
    ${answers.description}


    ## Table of Contents:
    [Installation](#installation)
    [Usage](#usage)
    [Contributions](#contributions)
    [Tests](#tests)
    [Questions](#questions)

   
    ## Installation
    ${answers.install}


    ## Usage
    ${answers.use}


    ## Contributions
    ${answers.contribute}


    ## Tests
    ${answers.issues}


    ## Questions
    'If you have additional questions about this application, please contact me below using the methods below.'
    ${answers.username}
    ${answers.email}

'
}
.then(answers => {
    const readme = createREADME(answers);
    fs.writeFileSync('./readme.md', readme, (error) => { if (error) console.log("Opps, try again") });
});


// Function call to initialize app
// init();

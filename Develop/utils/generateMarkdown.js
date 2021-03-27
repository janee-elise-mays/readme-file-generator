// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Mozilla Public License 2.0"){
      return "![NPM](https://img.shields.io/npm/l/mozilla?label=Mozilla%20Public%20License%202.0)"
  }else if(license == "Apache License 2.0"){
      return "[![NPM](https://img.shields.io/npm/l/apache?color=blue&label=apache%202.0))]"
  }else(license === "MIT License")
      return "![NPM](https://img.shields.io/npm/l/mit?color=blue&label=MIT%20License%202.0)"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}


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

`
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Mozilla Public License 2.0"){
      return "[![License](https://img.shields.io/npm/l/mozilla?label=Mozilla%20Public%20License%202.0)]"
  }else if(license == "Apache License 2.0"){
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  }else(license === "MIT License")
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Mozilla Public License 2.0"){
    return "https://opensource.org/licenses/MPL-2.0"
}else if(license == "Apache License 2.0"){
    return "https://opensource.org/licenses/Apache-2.0"
}else(license === "MIT License")
    return "https://opensource.org/licenses/MIT"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "Mozilla Public License 2.0"){
    return "Mozilla Public License 2.0"
}else if(license == "Apache License 2.0 "){
    return "Apache License 2.0"
}else(license === "MIT License")
    return "MIT License"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## License
This project is licensed under
${renderLicenseBadge()}
${renderLicenseLink()}
${renderLicenseSection()}


## Description
${answers.description}


## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${answers.install}


## Usage
${answers.use}


## Contributions
${answers.contribute}


## Tests
${answers.issues}


## Questions
If you have additional questions about this application, please contact me using the methods below.
${answers.username}
${answers.email}

${answers.license}
`
}

module.exports = generateMarkdown;

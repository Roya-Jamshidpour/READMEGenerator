// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description of your project.',
        },
        {
            type: 'input',
            name: 'Installation Instructions',
            message: 'Enter installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'Usage Information',
            message: 'Describe how to use your project',
        },
        {
            type: 'multi-choice',
            name: 'License',
            message: 'Which license would you like to have for your project?',
            rows: [
                        {
                            name: 'Apache',
                            value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                        },
                        {
                            name: 'MIT',
                            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
                        },
                        {
                            name: 'Mozilla Public License',
                            value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                        },
                    ],
                },
                {
                    type: 'input',
                    name: 'Contributors',
                    message: 'Enter who contributed to your project.',
                },
                {
                    type: 'input',
                    name: 'Tests',
                    message: 'Enter any testing information for your project.',
                },
                {
                    type: 'input',
                    name: 'GitHub',
                    message: 'Enter your GitHub Username',
                },
                {
                    type: 'input',
                    name: 'Email',
                    message: 'Enter your email address.',
                },
            ])
    .then((userInput) => {
        const htmlPageContent = generateHTML(answers);

# Title

## Table of Contents

## Description 

## Table of Contents 

## Installation 

## Usage 

## License 

## Contributing 

## Tests  

## Questions




























        // TODO: Create a function to initialize app
        function init() { }

        // Function call to initialize app
        init();
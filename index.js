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
            message: 'Enter usage information for your project',
        },
        {
            type: 'multi-choice',
            name: 'License',
            message: 'Which license would you like to have for your project?',
            rows: [
                        {
                            name: 'Apache',
                            value: '#f00',
                        },
                        {
                            name: 'MIT',
                            value: '#0f0',
                        },
                        {
                            name: 'GPL',
                            value: '#00f',
                        },
                    ],
                },
                {
                    type: 'input',
                    name: 'linkedin',
                    message: 'Enter your LinkedIn URL.',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your GitHub Username',
                },
                {
                    type: 'input',
                    name: 'linkedin',
                    message: 'Enter your LinkedIn URL.',
                },
            ])
    .then((answers) => {
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
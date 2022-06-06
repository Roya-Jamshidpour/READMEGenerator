// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
const writeToFile = (userInput) => {

    `# Title
    ${userInput.Title}

    ## Table of Contents
    1. [Contributing](#Contributors)
    2. [Description](#Description)
    3. [Installation](#Installation)
    4. [Usage](#Usage)
    5. [License](#License)
    6. [Tests](#Tests)
    7. [Questions](#GitHub)

    ## Contributing
    ${userInput.Contributors}

    ## Description 
    ${userInput.Description}
    
    ## Installation 
    ${userInput.Installation}
    
    ## Usage 
    ${userInput.Usage}
    
    ## License 
    ${userInput.License}
    
    ## Tests
    ${userInput.Tests}
    
    ## Questions
    ### [My GitHub](#https://github.com/${userInput.GitHub})
    ### [My Email](${userInput.Email})

    ## Link to Deployed Application
    ### [Click here!](https://${userInput.GitHub}.github.io/${userInput.Title}/)
    `
;
}

// questions asked to user
inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Enter who contributed to your project.',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description of your project.',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Enter installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Describe how to use your project',
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Which license would you like to have for your project?',
            choices: [
                        {
                            name: 'Apache 2.0',
                            value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
                        },
                        {
                            name: 'MIT',
                            value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
                        },
                        {
                            name: 'BSD-3-Clause License',
                            value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]',
                        },
                        {
                            name: 'Boost Software License',
                            value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]',
                        },
                        {
                            name: 'Mozilla Public License',
                            value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]',
                        },
                    ],
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
                console.log(userInput);
                const readmeContent = writeToFile(userInput)
                fs.writeToFile('./utils/generated-README.md', readmeContent, (err) => 
                err ? console.log(err) : console.log('README generated successfully!'));
            });

        // TODO: Create a function to initialize app
    
        // Function call to initialize app
       
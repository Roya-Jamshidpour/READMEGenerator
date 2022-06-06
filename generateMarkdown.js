// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `# Title
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
  
  
}


module.exports = generateMarkdown;

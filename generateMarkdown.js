

// function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.Title}
  
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
  ### GitHub: ${userInput.GitHub}
  ### Email: ${userInput.Email}
  
  ## Link to Deployed Application
  ### [Click here!](https://${userInput.GitHub}.github.io/${userInput.Title}/)
  `


}


module.exports = generateMarkdown;

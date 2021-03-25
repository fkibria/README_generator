// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

### Table of Contents\n\n- [Overview](#overview)\n- [Link to App](#deployed)\n- [Installation](#installation)\n- [Criteria](#criteria)\n- [License](#license)\n- [Github](#github)\n-  
## Overview
${data.overview}

## Link to App 
${data.deployed}

## Installation

${data.installation}

## Acceptance Criteria
${data.criteria}

## License
${data.license}

## Github
${data.github}

`;
}

module.exports = generateMarkdown;

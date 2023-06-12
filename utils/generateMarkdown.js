// This function generates the markdown code template used in the read me file.
function generateMarkdown(response) {
  return `# ${response.title}
${renderLicenseBadge(response.license)}

  ## Description
  ${response.description}

  ## Table of Contents
  + [Description](#description)
  + [Installation](#installation)
  + [Usage](#usage)
  + [Contributing](#contributing)
  + [Tests](#tests)
  + [Questions](#questions)
  ${renderLicenseLink(response.license)}

  ## Installation
  ${response.installation}


  ## Usage
  ${response.usage}


  ## Contributing
  ${response.contributing}


  ## Tests
  This project is tested using an ${response.tests}


  ${renderLicenseSection(response.license)}


  ## Questions
  If there are any further questions you have about this application please contact me. 
  My Email is: ${response.email}
  If you would like to view other applications I have created; my GitHub username is ${response.name} and here is a link to my GitHub repositories: https://github.com/${response.name}/
`;
}

//this function adds the license badge if there is a license selected, if not it returns an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

//this function creates a link to the license section if a license is selected
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `+ [License](#license)`;
  }
  return '';
}

// This function adds the license section to the read me, if there is no license the section does not appear
function renderLicenseSection(license) {
  if (license !== 'none'){
    return `## License 
    This application uses an ${license} license`
  }
  return '';
}

module.exports = generateMarkdown;
//it is exported so that it can be reffered to in the index.js file
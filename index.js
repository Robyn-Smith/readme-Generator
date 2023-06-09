// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const prompts = require ('./utils/prompts');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(markdown) {
          fs.writeFile('readme.md', markdown, (err) =>
  err ? console.error(err) : console.log('new file created')
);}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(prompts)
    .then((response) => {
        const markdown = generateMarkdown(response);
        writeToFile(markdown);
    })
}

// Function call to initialize app
init();


// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'input',
//       message: 'What languages do you know?',
//       name: 'language',
//     },
//     {
//       type: 'input',
//       message: 'What is your preferred method of communication?',
//       name: 'communication',
//     },
//   ])
//   .then((response) => {
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('something is incorrect')
//       fs.writeFile('log.txt', `${response.username}`, (err) =>
//   err ? console.error(err) : console.log('new file')
// );}
//   );
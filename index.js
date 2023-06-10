// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const prompts = require ('./utils/prompts');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
// const questions = [
//     {
//       type: 'input',
//       message: 'What is your description of this project?',
//       name: 'description',
//     },
//     {
//       type: 'input',
//       message: 'How do you install this project?',
//       name: 'installation',
//     },
//     {
//       type: 'input',
//       message: 'How do you use this project?',
//       name: 'usage',
//     },
//     {
//       type: 'input',
//       message: 'How can people contribute to this project?',
//       name: 'contributions',
//     },
//     {
//       type: 'list',
//       message: 'What license does this project use?',
//       name: 'license',
//       choices: ['none', 'MIT', 'BSD 3', 'apache-2.0', 'gpl-3.0', 'ms-pl', 'osl-3.0']
//     },
//     {
//       type: 'input',
//       message: 'How is the project tested?',
//       default: 'npm test',
//       name: 'testing',
//     },
//     {
//       type: 'input',
//       message: 'What is your Github account username?',
//       name: 'name',
//     },
//     {
//       type: 'input',
//       message: 'What is your email address?',
//       name: 'email',
//     },
// ];

// TODO: Create a function to write README file
// function writeToFile(markdown) {
//           fs.writeFile('readme.md', markdown, (err) =>
//   err ? console.error(err) : console.log('new file created')
// );}

// TODO: Create a function to initialize app
// function init() {
//     inquirer
//     .prompt(prompts)
//     .then((response) => {
//         const markdown = generateMarkdown(response);
//         writeToFile('README.md', markdown);
//     });
// }

// Function call to initialize app
// init();



function writeToFile() {
    return inquirer.prompt(prompts)
    .then((response) => {

     const fileName = 'README.md'
     const md = generateMarkdown(response)

      fs.writeFile(fileName, md,(err) =>
      err ? console.log(err) : console.log ('new file successfully created'))
      return (response) })};
   
  writeToFile()



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
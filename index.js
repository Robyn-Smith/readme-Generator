//all of the packages needed for this application are required here so that the code can access:
const fs = require('fs');                         //the Node standard library package for reading and writing files
const inquirer = require('inquirer');             //the NPM package which allows the user to input Node.js command line interface, 
const prompts = require ('./utils/prompts');                      //the array of questions (prompts), 
const generateMarkdown = require('./utils/generateMarkdown');     //markdown template (generateMarkdown).


//this function writes a readme file using the responses from user input and the generate markdown template.
//it also tells the user if there are any errors or if the file has successfully been creaated which is helpful in identifying any issues.
function writeToFile() {
    return inquirer.prompt(prompts)
    .then((response) => {

     const fileName = 'README.md'
     const md = generateMarkdown(response)

      fs.writeFile(fileName, md,(err) =>
      err ? console.log(err) : console.log ('new file successfully created'))
      return (response) })};
   
  writeToFile()
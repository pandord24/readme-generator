// TODO: Include packages needed for this application
const path = require("path")
const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require ("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "github",
    message: "What is the user Github username?"
},
{
    type: "input",
    name: "email",
    message: "What is the user email address?"
},
{
    type: "input",
    name: "title",
    message: "What is the user project's name?"
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of the user's project"
},
{
    type: "list",
    name: "license",
    message: "What kind of license should the user project have?",
    choices: ["APACHE", "GPL", "MIT", "None"]
},
{
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?"
},
{
    type: "input",
    name: "test",
    message: "What command should be run to run test?"
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
},
{
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README....");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();

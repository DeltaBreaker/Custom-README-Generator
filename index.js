const input = require("inquirer");
const output = require("fs");
const markdown = require("/generateMarkdown.js");

const questions = [
    {
        message: "Title:",
        name: "docTitle"
    },
    {
        message: "Description:",
        name: "desc"
    },
    {
        message: "Installation Instructions:",
        name: "inst"
    },
    {
        message: "Usage Info:",
        name: "usage"
    },
    {
        message: "Contribution Guidelines:",
        name: "contribution"
    },
    {
        message: "Test Instructions:",
        name: "test"
    },
    {
        type: "list",
        choices: [
            "MIT",
            "Apache-2.0",
            "ISC",
            "EPL-1.0"
        ],
        message: "License:",
        name: "license"
    },
    {
        message: "Github Username:",
        name: "username"
    },
    {
        message: "Email:",
        name: "email"
    }
];

function writeToFile(fileName, data) {
    output.writeFile(fileName, markdown.generateMarkdown(data), function(error) {
        error ? console.error(error) : console.log("README.md created successfully.");
    });
}

function init() {
    input.prompt(questions).then(function(input) {
        writeToFile("README.md", );
    });
}

init();

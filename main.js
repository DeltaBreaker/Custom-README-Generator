const input = require("inquirer");
const output = require("fs");

input.prompt([
    {
        message: "Title:",
        name: "title"
    },
    {
        message: "Description:",
        name: "desc"
    },
    {
        message: "Installation Instructions:",
        name: "instInstructions"
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
        name: "testInstructions"
    },
    {
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
]).then(function(input) {
    output.writeFile("README.md", styleREADME(input), function(error) {
        error ? console.error(error) : console.log("README.md created successfully.");
    });
});

function styleREADME(input) {
    let result = "# " + input.title + "\n";
    result    +=        input.desc  + "\n";
    
    return result;
}
const inquirer = require('inquirer');
const fs = require('fs');
const { generateManager, generateEngineer, generateIntern, generateHTML } = require('./src/templates');

const teamMembers = [];

// function with inquirer prompt to ask if user wants more members
const buildTeam = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Which type of team member would you like to add?",
                choices: ["engineer", "intern", "I don't want anymore team members"]
            }
        ])
        .then((answer) => {
            if (answer.employeeType == "engineer") {
                engineerPrompt();
            }
            else if (answer.employeeType == "intern") {
                internPrompt();
            }
            else {
                const teamMembersHTML = generateHTML(teamMembers);
                fs.writeFile('./dist/index.html', teamMembersHTML, (err) =>
                    err ? console.log(err) : console.log('\x1b[32m%s\x1b[0m', 'Successfully created team members HTML!')
                );
                return;
            }
        })
}

// function with inquirer prompt for manager
const managerPrompt = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
            },
            {
                type: "input",
                name: "managerID",
                message: "What is the team manager's ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "What is the team manager's office number?",
            }
        ])
        .then((answers) => {
            const managerContent = generateManager(answers);
            teamMembers.push(managerContent);
            buildTeam();
        });
}

// function with inquirer prompt for engineer
const engineerPrompt = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's Github username?"
            }
        ])
        .then((answers) => {
            const engineerContent = generateEngineer(answers);
            teamMembers.push(engineerContent);
            buildTeam();
        });
}


// function with inquirer prompt for intern
const internPrompt = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internID",
                message: "What is the intern's ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school name?"
            }
        ])
        .then((answers) => {
            const internContent = generateIntern(answers);
            teamMembers.push(internContent);
            buildTeam();
        });
}

managerPrompt();
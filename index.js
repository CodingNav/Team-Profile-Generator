const inquirer = require('inquirer');
const fs = require('fs');

const teamMembers = [];

// generates manager card
const generateManager = (answers) => 
    `
    <!-- MANAGER CARD -->
    <div class="card manager-card">
        <div class="card-header text-center">
            <h2>Name</h2>
            <h3>Manager</h3>
            <i class="fas fa-mug-hot"></i>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 1234</li>
                <li class="list-group-item">Email: test@test.com</li>
                <li class="list-group-item">Office Number: 128</li>
            </ul>
        </div>
    </div>
`;

// generates engineer card
const generateEngineer = (answers) =>
    `
    <!-- ENGINEER CARD -->
    <div class="card engineer-card">
        <div class="card-header text-center">
            <h2>Name</h2>
            <h3>Engineer</h3>
            <i class="fas fa-glasses"></i>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 1234</li>
                <li class="list-group-item">Email: test@test.com</li>
                <li class="list-group-item">Github: username</li>
            </ul>
        </div>
    </div>
`;

// generates intern card
const generateIntern = (answers) =>
    `
    <!-- INTERN CARD -->
    <div class="card intern-card">
        <div class="card-header text-center">
            <h2>Name</h2>
            <h3>Intern</h3>
            <i class="fas fa-user-graduate"></i>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: 1234</li>
                <li class="list-group-item">Email: test@test.com</li>
                <li class="list-group-item">School: University</li>
            </ul>
        </div>
    </div>
`;

// generates the html page
const generateHTML = (answers) =>
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                <!-- CARDS GO HERE -->
                </div>
            </div>
        </div>
        <script src="assets/js/index.js"></script>
    </body>
    </html>
`;

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
            return;
        }
    })
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
    });  
}


    
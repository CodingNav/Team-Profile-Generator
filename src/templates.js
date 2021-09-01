
// generates manager card
const generateManager = (manager) =>
    `
    <!-- MANAGER CARD -->
    <div class="col-sm-6 col-md-5 col-lg-4">
        <div class="card manager-card">
            <div class="card-header text-center">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
                <i class="fas fa-mug-hot"></i>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
`;

// generates engineer card
const generateEngineer = (answers) =>
    `
    <!-- ENGINEER CARD -->
    <div class="col-sm-6 col-md-5 col-lg-4">
        <div class="card engineer-card">
            <div class="card-header text-center">
                <h2>${answers.engineerName}</h2>
                <h3>Engineer</h3>
                <i class="fas fa-glasses"></i>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.engineerID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${answers.engineerGithub}" target="_blank">${answers.engineerGithub}</a></li>
                </ul>
            </div>
        </div>
    </div>
`;

// generates intern card
const generateIntern = (answers) =>
    `
    <!-- INTERN CARD -->
    <div class="col-sm-6 col-md-5 col-lg-4">
        <div class="card intern-card">
            <div class="card-header text-center">
                <h2>${answers.internName}</h2>
                <h3>Intern</h3>
                <i class="fas fa-user-graduate"></i>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.internID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${answers.internEmail}">${answers.internEmail}</a></li>
                    <li class="list-group-item">School: ${answers.internSchool}</li>
                </ul>
            </div>
        </div>
    </div>
`;

// generates the html page
const generateHTML = (teamMembers) =>
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
            <div class="row flex-wrap justify-content-center"> 
                <!-- CARDS GO HERE -->
                ${teamMembers.join("")}
            </div>
        </div>
        <script src="assets/js/index.js"></script>
    </body>
    </html>
`;

module.exports = { generateManager, generateEngineer, generateIntern, generateHTML };
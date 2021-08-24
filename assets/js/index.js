const inquirer = require('inquirer');
const fs = require('fs');

const generateManager = (answers) =>
    `
<i style="float: right;">${answers.license.badge}</i>
# ${answers.projectName}
`;

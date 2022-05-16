// SPDX-License-Identifier: MIT
// include needed libraries/modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// HTML generator
const renderHtml = require('./src/htmlRender');

// include classes here
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// set up paths for HTML file output
// From Node.js docs -
// "The path.resolve() method resolves a sequence of paths or path segments into an absolute path."
const OUTPUT_DIR = path.resolve(__dirname, "dist");
//console.log(OUTPUT_DIR);

// file storage location and name
// from Node.js docs -
// "The path.join() method joins all given path segments together using the platform-specific separator as a delimiter,
// then normalizes the resulting path."
const htmlOutputPath = path.join(OUTPUT_DIR, "teaminfo.html");
//console.log(htmlOutputPath);

// define global varaibles here
const team = [];
const idArray = [];

// ask for team memners info, Manager first then others
const userInquire = () => {
        return inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter Team Manager Name: ',
                    name: 'managerName',
                },
                {
                    type: 'input',
                    message: 'Enter Team Manager Employee ID: ',
                    name: 'managerId',
                },
                {
                    type: 'input',
                    message: 'Enter Team Manager Email: ',
                    name: 'managerEmail',
                },
                {
                    type: 'input',
                    message: 'Enter Team Manager Office Number: ',
                    name: 'managerOfficeNum',
                },
            ]).then((response) => {
                    // assign input data to manager Object
                    const teamManager = new Manager(response.managerId, response.managerName, response.managerEmail, response.managerOfficeNum);
                    team.push(teamManager);
                    idArray.push(response.managerId);
                    // enter other team member data
                    otherTeamInput();
                })
};// end inquirer function

// ask to add other team members (Engineer or Intern)
const otherTeamInput = () => {
        return inquirer.prompt([
                {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Add Engineer','Add Intern','Done'],
                name: 'input',
                },
            ]).then((response) => {
                    if (response.input === 'Add Engineer') {
                        addEngineer()
                    }
                    if (response.input === 'Add Intern') {
                        addIntern()
                    }
                    if (response.input === 'Done') {
                        writeToFile()
                    }
                })
};// end inquirer function

const addEngineer = (id,name,email,github) => {
    
};

//init of app
const init = () => {
    userInquire();
};
// ****
// start app here
// ****
init();

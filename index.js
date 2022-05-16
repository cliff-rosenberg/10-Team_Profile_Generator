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

// ask for team Manager info
// object is (name, id, email, officeNumber)
const getManager = () => {
        return inquirer.prompt([
                {
                    name: 'managerName',
                    type: 'input',
                    message: 'Enter Team Manager Name: ',
                    
                },
                {
                    name: 'managerId',
                    type: 'input',
                    message: 'Enter Team Manager Employee ID: ',  
                },
                {
                    name: 'managerEmail',
                    type: 'input',
                    message: 'Enter Team Manager Email: ',
                },
                {
                    name: 'managerOfficeNum',
                    type: 'input',
                    message: 'Enter Team Manager Office Number: ',
                },
            ])
};// end inquirer function

// ask to add other team members (Engineer or Intern)
const otherTeamInput = () => {
        return inquirer.prompt([
                {
                name: 'input',
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Add an Engineer', 'Add an Intern', 'Done'],
                },
            ])
};// end inquirer function

// Engineer object is (name, id, email, github)
const addEngineer = () => {
        return inquirer.prompt([
            {
                name: 'engineerName',
                type: 'input',
                message: 'Enter Engineer name: ',
            },
            {
                name: 'engineerId',
                type: 'input',
                message: 'Enter Engineer ID number: ',
                validate: data => {
                    const test = data.match(/^[1-9]\d*$/)
                    if (test) {
                        if (idArray.includes(data)) {
                            return "This ID is already in use. Please select a different ID."
                        } else {
                            return true
                        }
                        };
                        return "The ID number must be greater than zero!"
                    }
            },
            {
                name: 'engineerEmail',
                type: 'input',
                message: 'Enter Engineer Email address: ',
            },
            {
                name: 'engineerGithub',
                type: 'input',
                message: 'Enter the GitHub username: ',
            
            },
            ])
    };//end addEngineer()

// Intern object is (name, id, email, school)
const addIntern = () => {
        return inquirer.prompt([
            {
                name: 'internName',
                type: 'input',
                message: 'Intern Name: ',
            },
            {
                name: 'internId',
                type: 'input',
                message: 'Intern ID: ',
                validate: data => {
                    const test = data.match(/^[1-9]\d*$/)
                    if (test) {
                        if (idArray.includes(data)) {
                            return "This ID is already in use. Please select a different ID."
                        } else {
                            return true;
                        }
                    }
                    return "ID's should be greater than zero."
                }
            },
            {
                name: 'internEmail',
                type: 'input',
                message: 'Intern Email: ',
                
            },
            {
                name: 'internSchool',
                type: 'input',
                message: 'Intern School: ',
                
            },
            ])
    };//end addIntern()

// write HTML file out after data has been collected
const writeToFile = () => {
    // check if file location exists,
    // if not present then create directory and then run the function 
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
        };// end if
    fs.writeFileSync(htmlOutputPath,renderHtml(team),"utf-8");
    console.log("File teaminfo.html has been written out sucessfully");

    };//end writeToFile()

//main function of app
const doApp = async () => {
    let myInput;
    await getManager().then((response) => {
        // assign input data to manager Object
        const teamManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);
        // push on to team[] global array
        team.push(teamManager);
        // push id on to idArray[] global array
        idArray.push(response.managerId);
        console.log(team);
    })//end first await
    do {
        myInput = await otherTeamInput().then((response) => {
            if (response.input === 'Add an Engineer') {
                return "engineer";
            }
            if (response.input === 'Add an Intern') {
                return "intern";
            }
            if (response.input === 'Done') {
                return "done";
            }
        });
        if (myInput === "engineer") {
            await addEngineer().then((response) => {
                newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                // push on to team[] global array
                team.push(newEngineer);
                // push id on to idArray[] global array
                idArray.push(response.engineerId);
                })
            };//end addEngineer()
        if (myInput === "intern") {
            await addIntern().then((response) => {
                newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
                // push on to team[] global array
                team.push(newIntern);
                // push id on to idArray[] global array
                idArray.push(response.intId);
            })
        };//end addIntern()
    }
    while (myInput != "done");
    console.log(team);
    // write out file
    // writeToFile();
};

// ****
// start app here
// ****
doApp();

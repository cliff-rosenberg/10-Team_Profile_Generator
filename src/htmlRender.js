
// SPDX-License-Identifier: MIT
// HTML Rendering utility
// uses many template literals
// docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Objects previously defined as such:
// base class: Employee has (name, id, email)
// has methods getName(), getId(), getEmail(), getRole();

// Manager class extended from Employee
// adds (officeNumber) and getOfficeNumber() method
// overrides getRole() -> returns 'Manager' 
const managerCard = (manager) => {
        return `
<!-- Manager Card -->
<div class="card mx-3" style="width: 18rem;">
        <div class="card-header bg-info">
                <h3>${manager.getName()} <i class="fas fa-user"></i></h3>
                <h5 class="card-title">${manager.getRole()}</h5>
        </div>
        <div class="card-body">
                <p class="card-text"><span>ID: </span>${manager.getId()}</p>
                <p class="card-text"><span>Email: </span><a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
                <p class="card-text"><span>Office Number: </span>${manager.getOfficeNum()}</p>
        </div>
</div>
`;
};

// Engineer class extends Employee
// adds (github) and getGithub() method,
// overrides getRole() -> returns "Engineer"
const engineerCard = (engineer) => {
  return `
<!-- Engineer Card -->
<div class="card mx-3" style="width: 18rem;">
        <div class="card-header bg-info">
                <h3>${engineer.getName()} <i class="fas fa-code"></i> </h3>
                <h5 class="card-title">${engineer.getRole()}</h5>
        </div>
        <div class="card-body">
                <p class="card-text"><span>ID: </span>${engineer.getId()}</p>
                <p class="card-text"><span>Email: </span><a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
                <p class="card-text"><span>GitHub: </span> <a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
</div>
`;
};

// Intern class extends Employee
// adds (school) and getSchool() method,
// overrides getRole() -> returns "Intern"
const internCard = (intern) => {
    return `
<!-- Intern Card -->
<div class="card mx-3" style="width: 18rem;">
        <div class="card-header bg-info">
                <h3>${intern.getName()} <i class="fas fa-coffee"></i> </h3>
                <h5 class="card-title">${intern.getRole()}</h5>
        </div>
        <div class="card-body">
                <p class="card-text"><span>ID: </span>${intern.getId()}</p>
                <p class="card-text"><span>Email: </span> <a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></p>
                <p class="card-text"><span>School: </span>${intern.getSchool()}</p>
        </div>
</div>                
`;
};
// thanks to MDN web docs for detailed information on 
// Array.prototype standard built-in JavaScript objects!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const sortTeam = (input) => {
        // temporary array
        const htmlData = [];
        // find all Manager in team[], then map(), then join()
        htmlData.push(input.filter(employee => employee.getRole() === "Manager")
        .map(data => managerCard(data)).join(''));
        // find all Engineer in team[], then map(), then join()
        htmlData.push(input.filter(employee => employee.getRole() === "Engineer")
        .map(data => engineerCard(data)).join(''));
        // find all Intern in team[], then map(), then join()
        htmlData.push(input.filter(employee => employee.getRole() === "Intern")
        .map(data => internCard(data)).join(''));

        return htmlData.join('');
};


// Produce main HTML boilerplate
const mainHTML = (object) => {
        // sortTeam() called inside template literal
        return `
<!doctype html>
<html lang="en">
<head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous">
        <!-- Font Awesome -->
        <script src="https://kit.fontawesome.com/4387ae0935.js" crossorigin="anonymous"></script>
                
        <title>Meet the Team</title>
</head>
<body>
        <!-- header goes here -->
        <div class="page-header text-center bg-primary my-5">
                <h1 class="py-5">Our All-Star Team</h1>
        </div>
        
        <!-- Container for rendered HTML goes here -->
        <div class="d-flex flex-row justify-content-center">
        ${sortTeam(object)}
        </div>
</body>
</html>
`;
};

// export for generated HTML
exports.doHtml = (objectInput) => {
        return mainHTML(objectInput);
};

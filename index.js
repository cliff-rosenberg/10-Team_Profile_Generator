// SPDX-License-Identifier: MIT
// include needed libraries/modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// HTML generator
const render = require('./src/htmlRender');

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
// then normalizes the resulting path.""
const htmlOutputPath = path.join(OUTPUT_DIR, "teaminfo.html");
console.log(htmlOutputPath);

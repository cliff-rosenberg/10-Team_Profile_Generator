// Engineer class, extends Employee
const Employee = require('./Employee');

// set up Engineer class
class Engineer extends Employee {
        constructor(name, id, email, github) {
                super(name, id, email)
                this.github = github
        }
        getGithub() {
                return this.github
        }
        getRole() {
                return "Engineer"
        }
}
// export the class
module.exports = Engineer

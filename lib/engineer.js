// Engineer class, extends Employee
const Employee = require('./Employee');

// set up Engineer class
class Engineer extends Employee {
        constructor(id, name, email, github) {
                super(id, name, email)
                this.github = github

        }
        getId() {
                return this.id
        }
        getName() {
                return this.name
        }
        getEmail() {
                return this.email
        }
        getGithub() {
                return this.github
        }
        getRole() {
                return "Engineer"
        }
}
// export
module.exports = Engineer

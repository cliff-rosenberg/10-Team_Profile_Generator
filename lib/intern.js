// Intern class, extends Employee
const Employee = require('./Employee');

// set up Intern class
class Intern extends Employee {
        constructor(name, id, email, school) {
                super(name, id, email)
                this.school = school
        }
        getSchool() {
                return this.school
        }
        getRole() {
                return "Intern"
        }
}
// export
module.exports = Intern

// Mananger class, extends Employee class
const Employee = require('./Employee');

// set up Manager class
class Manager extends Employee {
        constructor(id, name, email, officeNumber) {
                super(id, name, email)
                this.officeNumber = officeNumber
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
        getOfficeNum(){
                return this.officeNumber
        }
        getRole() {
                return "Manager"
        }
};

// export
module.exports = Manager

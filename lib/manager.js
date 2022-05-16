// Mananger class, extends Employee class
const Employee = require('./Employee');

// set up Manager class
class Manager extends Employee {
        constructor(name, id, email, officeNumber) {
                super(name, id, email)
                this.officeNumber = officeNumber
        }
        getRole() {
                return "Manager"
        }
        getOfficeNum(){
                return this.officeNumber
        }
};

// export the class
module.exports = Manager

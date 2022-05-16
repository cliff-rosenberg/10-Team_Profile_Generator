// Employee Class
// this is the Parent class for all other class extends

class Employee {
    constructor (name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
        }
    getName() {
            return this.name;
        }
    getId() {
        return this.id;
        }
    getEmail() {
            return this.email
        }
    getRole() {
            return 'Employee'
        }
};

// export the class
module.exports = Employee

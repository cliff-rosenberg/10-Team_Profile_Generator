// Employee Class
// this is the Parent class for all other class extends

class Employee {
    constructor (id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
    getId() {
            console.log(`ID: ${this.id}`);
            return this.id;
    }
    getName() {
            console.log(`Name: ${this.name}`)
            return this.name;
    };
    getEmail() {
            console.log(`Email: ${this.email}`)
            return this.email
    }
    getRole() {
            return "Employee"

    }
    getIcon() {
            return "fas fa-user"
    }
}

// export
module.exports = Employee

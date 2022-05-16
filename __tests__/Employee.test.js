const Employee = require('../lib/Employee');

test("Can create new Employee object", () => {
    // Arrange - Act - Assert
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})

test("Can set name to Employee object", () => {
    const employeeName = "Cliff";
    const employee = new Employee("Cliff");

    expect(employee.name).toBe(employeeName);
})

test('Can set ID to Employee object', () => {
    const employeeId = 9;
    const employee = new Employee('Cliff', 9);

    expect(employee.id).toBe(employeeId);
})

test("Can get name with getName method on Employee object", () => {
    const employeeName = "Cliff";
    const employee = new Employee("Cliff");

    expect(employee.getName()).toBe(employeeName);
})

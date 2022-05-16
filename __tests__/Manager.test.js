const Manager = require('../lib/Manager');

test("Can create new Manager object", () => {
    // Arrange - Act - Assert
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
})

test("Can set name to Manager object", () => {
    const managerName = "Robert";
    const manager = new Manager("Robert");

    expect(manager.name).toBe(managerName);
})

test("Can set ID to Manager object", () => {
    const managerId = 9;
    const manager = new Manager("Robert", 9);

    expect(manager.id).toBe(managerId);
})

test("Can get name with getName method on Manager object", () => {
    const managerName = "Robert";
    const manager = new Manager("Robert");

    expect(manager.getName()).toBe(managerName);
})

test("Can set Office Number to Manager object", () => {
    const managerOfficeNum = 101;
    const manager = new Manager("Robert", 9, "robert1@gmail.com", 101);

    expect(manager.officeNumber).toBe(managerOfficeNum);
})

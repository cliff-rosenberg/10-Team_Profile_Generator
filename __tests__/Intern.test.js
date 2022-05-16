const Intern = require('../lib/Intern');

test("Can create new Intern object", () => {
    // Arrange - Act - Assert
    const intern = new Intern();

    expect(typeof(intern)).toBe('object');
})

test("Can get school with getSchool method on Intern object", () => {
    const internSchool = "University of Arizona";
    const intern = new Intern("Thomas", 12, "thomas77@gmail.com", "University of Arizona");

    expect(intern.getSchool()).toBe(internSchool);
})

test("The getRole() function returns the string 'Intern'", () => {
    const intern = new Intern("Thomas", 12, "thomas77@gmail.com", "University of Arizona");

    expect(intern.getRole()).toBe("Intern");
})

const Engineer = require('../lib/Engineer');

test("Can create new Engineer object", () => {
    // Arrange - Act - Assert
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
})

test("Can set name to Engineer object", () => {
    const engineerName = "Maxwell";
    const engineer = new Engineer("Maxwell");

    expect(engineer.name).toBe(engineerName);
})

test("Can set ID to Engineer object", () => {
    const engineerId = 9;
    const engineer = new Engineer("Maxwell", 9);

    expect(engineer.id).toBe(engineerId);
})

test("Can get name with getName method on Engineer object", () => {
    const engineerName = "Maxwell";
    const engineer = new Engineer("Maxwell");

    expect(engineer.getName()).toBe(engineerName);
})

test("Can set the Github name", () => {
    const githubName = "maxwell-engineer101";
    const engineer = new Engineer("Maxwell", 9, "maxwell1@gmail.com", "maxwell-engineer101");

    expect(engineer.getGithub()).toBe(githubName);
})

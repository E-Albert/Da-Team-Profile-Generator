const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor argument", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

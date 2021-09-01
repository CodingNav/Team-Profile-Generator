const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

const employee = new Employee("Bob", 1234, "bob@test.com");

describe("Employee", () => {
    describe("getName", () => {
        it("should get the employee's name", () => {
            const name = employee.getName();
            expect(name).toEqual("Bob");
        });
    });
    describe("getId", () => {
        it("should get the employee's ID", () => {
            const id = employee.getId();
            expect(id).toEqual(1234);
        });
    });
    describe("getEmail", () => {
        it("should get the employee's email", () => {
            const email = employee.getEmail()
            expect(email).toEqual("bob@test.com");
        });
    });
    describe("getRole", () => {
        it("should get the employee's role", () => {
            const role = employee.getRole();
            expect(role).toEqual("Employee");
        });
    });
});
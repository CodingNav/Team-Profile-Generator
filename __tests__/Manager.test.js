const { it, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

const manager = new Manager("Bob", 1234, "bob@test.com", 1);

describe("Manager", () => {
    describe("getName", () => {
        it("should get the manager's name", () => {
            const name = manager.getName();
            expect(name).toEqual("Bob");
        });
    });
    describe("getId", () => {
        it("should get the manager's ID", () => {
            const id = manager.getId();
            expect(id).toEqual(1234);
        });
    });
    describe("getEmail", () => {
        it("should get the manager's email", () => {
            const email = manager.getEmail()
            expect(email).toEqual("bob@test.com");
        });
    });
    describe("getOfficeNumber", () => {
        it("should get the manager's office number", () => {
            const officeNum = manager.officeNumber;
            expect(officeNum).toEqual(1);
        });
    });
    describe("getRole", () => {
        it("should get the manager's role", () => {
            const role = manager.getRole();
            expect(role).toEqual("Manager");
        });
    });
});
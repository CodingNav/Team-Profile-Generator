const { it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

const intern = new Intern("Bob", 1234, "bob@test.com", "Test University");

describe("Intern", () => {
    describe("getName", () => {
        it("should get the intern's name", () => {
            const name = intern.getName();
            expect(name).toEqual("Bob");
        });
    });
    describe("getId", () => {
        it("should get the intern's ID", () => {
            const id = intern.getId();
            expect(id).toEqual(1234);
        });
    });
    describe("getEmail", () => {
        it("should get the intern's email", () => {
            const email = intern.getEmail()
            expect(email).toEqual("bob@test.com");
        });
    });
    describe("getSchool", () => {
        it("should get the intern's school", () => {
            const school = intern.getSchool();
            expect(school).toEqual("Test University");
        });
    });
    describe("getRole", () => {
        it("should get the intern's role", () => {
            const role = intern.getRole();
            expect(role).toEqual("Intern");
        });
    });
});
const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Bob", 1234, "bob@test.com", "codingbob");

describe("Engineer", () => {
    describe("getName", () => {
        it("should get the engineer's name", () => {
            const name = engineer.getName();
            expect(name).toEqual("Bob");
        });
    });
    describe("getId", () => {
        it("should get the engineer's ID", () => {
            const id = engineer.getId();
            expect(id).toEqual(1234);
        });
    });
    describe("getEmail", () => {
        it("should get the engineer's email", () => {
            const email = engineer.getEmail()
            expect(email).toEqual("bob@test.com");
        });
    });
    describe("getGithub", () => {
        it("should get the engineer's Github", () => {
            const github = engineer.getGithub();
            expect(github).toEqual("codingbob");
        });
    });
    describe("getRole", () => {
        it("should get the engineer's role", () => {
            const role = engineer.getRole();
            expect(role).toEqual("Engineer");
        });
    });
});
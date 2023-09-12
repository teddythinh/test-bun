import { expect, test, describe } from "bun:test";

// describe is test suite, test is test case
describe("arithmetic", () => {
    test("2 + 2", () => {
        expect(2 + 2).toBe(4);
    });
    // test can be async
    test("2 * 2", async () => {
        const result = await Promise.resolve(2 * 2);
        expect(result).toBe(4);
    });
    // use done callback, if don't call done, test will hang
    test("2 / 2", done => {
        Promise.resolve(2 / 2).then((result) => {
                expect(result).toBe(1);
                done();
            })
            .catch((err) => done(err));
    });
})


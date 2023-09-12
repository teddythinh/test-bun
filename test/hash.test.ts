import { expect, test, describe } from "bun:test";

const password = "helloworld";

describe("password", () => {
    test("argon2", async () => {
        const argon2Hash = await Bun.password.hash(password, {
            algorithm: "argon2id", // argon2i, argon2d, argon2id
            memoryCost: 4, // memory usage in kilobytes
            timeCost: 3, // the number of iterations
        });
        const argon2Verify = await Bun.password.verify(password, argon2Hash);
        expect(argon2Verify).toBe(true);
    });
    test("bcrypt", async () => {
        const bcryptHash = await Bun.password.hash(password, {
            algorithm: "bcrypt", // bcrypt
            cost: 4, // number between 4-31
        });
        const bcryptVerify = await Bun.password.verify(password, bcryptHash);
        expect(bcryptVerify).toBe(true);
    });
});
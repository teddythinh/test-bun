const password = "super-secret-pa$$word";

// Argon2d is faster and uses data - depending memory access, 
// which makes it highly resistant against GPU cracking attacks 
// and suitable for applications with no threats from side - channel timing attacks(eg.cryptocurrencies).

// Argon2i instead uses data-independent memory access,
// which is preferred for password hashing and password-based key derivation,
// but it is slower as it makes more passes over the memory to protect from tradeoff attacks

// Argon2id is a hybrid of Argon2i and Argon2d, 
// using a combination of data-depending and data-independent memory accesses,
// which gives some of Argon2i's resistance to side-channel cache timing attacks 
// and much of Argon2d's resistance to GPU cracking attacks.

// use argon2id
const argon2Hash = await Bun.password.hash(password, {
    algorithm: "argon2id", // argon2i, argon2d, argon2id
    memoryCost: 4, // memory usage in kilobytes
    timeCost: 3, // the number of iterations
});

// use bcrypt
const bcryptHash = await Bun.password.hash(password, {
    algorithm: "bcrypt", // bcrypt
    cost: 4, // number between 4-31
});

console.log(argon2Hash)
console.log(bcryptHash)
const argon2Verify = await Bun.password.verify(password, argon2Hash);
const bcryptVerify = await Bun.password.verify(password, bcryptHash);

console.log(argon2Verify)
console.log(bcryptVerify)

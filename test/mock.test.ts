import { test, expect, mock, spyOn } from "bun:test";

// Test 1 ===================
const random = mock(() => Math.random());

test("random", async () => {
    const val = random();
    expect(val).toBeGreaterThan(0);
    expect(random).toHaveBeenCalled();
    expect(random).toHaveBeenCalledTimes(1);
});

// Test 2 ===================

const ringo = {
    name: "Ringo",
    sayHi() {
        console.log(`Hello I'm ${this.name}`);
    },
};

const spy = spyOn(ringo, "sayHi");

test("spyon", () => {
    expect(spy).toHaveBeenCalledTimes(0);
    ringo.sayHi();
    expect(spy).toHaveBeenCalledTimes(1);
});
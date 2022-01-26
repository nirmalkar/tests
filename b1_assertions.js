import { sum } from "./b1.js";
import { subtract } from "./b1.js";

const a = 7;
const b = 5;

test("this one is sum test!!", () => {
    const sumResult = sum(a, b);
    const actualSum = 12;
    expect(sumResult).toBe(actualSum);
});

test("this one is subtraction test!!", () => {
    const subtractResult = subtract(a, b);
    const actualSubtraction = 1;
    expect(actualSubtraction).toBe(subtractResult);
});

function test(type, callback) {
    try {
        callback();
    } catch (e) {
        console.log(`error: ${e}, type: ${type}`);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equals to ${expected}`);
            } else {
                return "Congrats Test passed!!";
            }
        },
    };
}

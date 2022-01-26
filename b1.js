export const sum = (a, b) => a + b;
export const subtract = (a, b) => a + b;

const result = sum(7, 5);
const expect = 12;

if (result !== expect) {
    throw new Error(`${result} is not equals ${expect}`);
} else {
    console.log("Congratulations Test passed!!");
}

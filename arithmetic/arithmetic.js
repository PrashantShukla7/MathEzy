const add = (...numbers) => {
    if (numbers.some(num => typeof num !== "number")) {
        throw new Error("Invalid input: add expects numbers.");
    }
    return numbers.reduce((acc, num) => acc + num, 0);
};

const subtract = (...numbers) => {
    if (numbers.some(num => typeof num !== "number")) {
        throw new Error("Invalid input: subtract expects numbers.");
    }
    return numbers.reduce((acc, num) => acc - num);
};

const multiply = (...numbers) => {
    if (numbers.some(num => typeof num !== "number")) {
        throw new Error("Invalid input: multiply expects numbers.");
    }
    return numbers.reduce((acc, num) => acc * num, 1);
};

const divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number" || b === 0) {
        throw new Error("Invalid input: divide expects two numbers and the divisor cannot be zero.");
    }
    return a / b ; // Handle divide by zero
};

export {add, multiply, divide, subtract};
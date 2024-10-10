const isPrime = (num) => {
    if (num === undefined || typeof num !== "number") {
        throw new Error("Invalid input: isPrime expects a number.");
    }
    if (num <= 1) return false;
    for (let i = 2; i < num * num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const factorial = (num) => {
    if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
        throw new Error(
            "Invalid input: factorial expects a non-negative integer."
        );
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
};

const gcd = (num1, num2) => {
    if (
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        num1 < 0 ||
        num2 < 0
    ) {
        throw new Error("Invalid input: gcd expects two non-negative numbers.");
    }
    let gcd = 1;
    for (let i = 2; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }
    return gcd;
};

const fibonacci = (n) => {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
        throw new Error(
            "Invalid input: fibonacci expects a non-negative integer."
        );
    }
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0,
        b = 1,
        temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

const geometricSeriesSum = (a, r, n) => {
    if (r === 1) return a * n; // Special case when r = 1
    return (a * (1 - Math.pow(r, n))) / (1 - r);
};

const arithmeticSeriesSum = (a, d, n) => {
    return (n / 2) * (2 * a + (n - 1) * d);
};

const distance = ([x1, y1], [x2, y2]) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

// to calculate nCr
const combinations = (n, r) => {
    if (
        typeof n !== "number" ||
        typeof r !== "number" ||
        n < 0 ||
        r < 0 ||
        !Number.isInteger(n) ||
        !Number.isInteger(r) ||
        r > n
    ) {
        throw new Error(
            "Invalid input: combinations expects two non-negative integers, where r ≤ n."
        );
    }
    return factorial(n) / (factorial(r) * factorial(n - r));
};

// to calculate nPr
const permutations = (n, r) => {
    if (
        typeof n !== "number" ||
        typeof r !== "number" ||
        n < 0 ||
        r < 0 ||
        !Number.isInteger(n) ||
        !Number.isInteger(r) ||
        r > n
    ) {
        throw new Error(
            "Invalid input: permutations expects two non-negative integers, where r ≤ n."
        );
    }
    return factorial(n) / factorial(n - r);
};

const log = (base, value) => {
    if (
        typeof base !== "number" ||
        typeof value !== "number" ||
        base <= 0 ||
        value <= 0 ||
        base === 1
    ) {
        throw new Error(
            "Invalid input: log expects base > 0 and base ≠ 1, and value > 0."
        );
    }
    return Math.log(value) / Math.log(base);
};

export {
    isPrime,
    permutations,
    combinations,
    log,
    factorial,
    fibonacci,
    arithmeticSeriesSum,
    geometricSeriesSum,
    distance,
};

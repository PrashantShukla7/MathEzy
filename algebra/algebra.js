const solveLinear = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid input: solveLinear expects two numbers.");
    }
    if (a === 0) {
        if (b === 0) {
            return "Infinite solutions";  // 0x = 0
        } else {
            return "No solution";  // 0x + b = 0
        }
    }
    return -b / a;  // ax + b = 0 => x = -b / a
};

const solveQuadratic = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return null;
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
};

export {solveLinear, solveQuadratic}
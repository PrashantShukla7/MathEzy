# math-ezy

A lightweight and efficient math utilities package providing a collection of essential math functions such as prime checks, factorials, trigonometric calculations, and more.

## Installation

You can install this package using npm:

```bash
npm install math-ezy
```
## Documentation
Once installed, you can import the functions you need
```bash
import { add, subtract, factorial, isPrime, fibonacci } from 'math-ezy';

// Example usage
console.log(add(1, 2, 3)); // Output: 6
console.log(factorial(5)); // Output: 120
```
## Functions

**isPrime(num)**
```bash
isPrime(7)  // output : true
```
**factorial(num)**
```bash
factorial(5)  // output : 120
```
**gcd(num1, num2)**
```bash
gcd(12, 15)  // output : 3
```
**fibonacci(n)**
Returns the nth fibonacci number
```bash
fibonacci(5)  // output : 5
```
**geometricSeriesSum(a, r, n)**
```bash
geometricSeriesSum(1, 2, 5)  // output : 31
```
**arithmeticSeriesSum(a, d, n)**
```bash
arithmeticSeriesSum(1, 2, 5)  // output : 25
```
**distance([x1, y1], [x2, y2])**
```bash
distance([0, 0], [3, 4]); // 5
```
**combinations(n, r)**
```bash
combinations(5, 3); // 10
```
**permutations(n, r)**
```bash
permutations(5, 3); // 60
```
**log(base, value)**
```bash
log(2, 8); // 3
```
**solveQuadratic(a, b, c)**
```bash
solveQuadratic(1, -3, 2); // [2, 1]
```
**sin(degrees)**
```bash
sin(30); // 0.5
```
**cos(degrees)**
```bash
cos(60); // 0.5
```
**tan(degrees)**
```bash
tan(45); // 1
```
**add(...numbers)**
```bash
add(1, 2, 3, 4); // 10
```
**subtract(...numbers)**
```bash
subtract(10, 2, 1); // 7
```
**multiply(...numbers)**
```bash
multiply(2, 3, 4); // 24
```
**divide(a, b)**
```bash
divide(10, 2); // 5
```
## Contributing
Please feel free to contribute on this package to make it the best.
## Licence
Licensed under the ISC license.

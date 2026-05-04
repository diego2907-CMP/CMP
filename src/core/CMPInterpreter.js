// CMPInterpreter.js

/**
 * Carry-less sum of 16 variables.
 */
function carryLessSum(variables) {
    let sum = 0;
    for (let i = 0; i < variables.length; i++) {
        sum ^= variables[i]; // XOR for carry-less addition
    }
    return sum;
}

/**
 * Generate dynamic Pascal Triangle up to n levels.
 */
function generatePascalTriangle(n) {
    const triangle = [];
    for (let row = 0; row < n; row++) {
        triangle[row] = [];
        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                triangle[row][col] = 1;
            } else {
                triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
            }
        }
    }
    return triangle;
}

/**
 * Mayan encoding function (0-9 numeric, 10-35 alphanumeric A-Z).
 */
function mayanEncode(value) {
    const base20 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encoded = '';
    while (value > 0) {
        encoded = base20[value % 20] + encoded;
        value = Math.floor(value / 20);
    }
    return encoded || '0'; // Return '0' if the value is 0.
}

/**
 * Example usage
 */
console.log(carryLessSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
console.log(generatePascalTriangle(5));
console.log(mayanEncode(65)); // Should return '25' (65 in base-20)

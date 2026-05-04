import React, { useState, useEffect } from 'react';

const CMPConsole = () => {
    const [inputs, setInputs] = useState(Array(16).fill(''));
    const [pascal, setPascal] = useState([]);
    const [carryLessSum, setCarryLessSum] = useState(0);
    const [mayanDisplay, setMayanDisplay] = useState('');

    useEffect(() => {
        generatePascalTriangle();
    }, []);

    const generatePascalTriangle = () => {
        const rows = 10; // Change as needed
        const triangle = [];
        for (let i = 0; i < rows; i++) {
            triangle[i] = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    triangle[i][j] = 1;
                } else {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }
            }
        }
        setPascal(triangle);
    };

    const calculateCarryLessSum = () => {
        let sum = inputs.reduce((acc, curr) => acc + parseInt(curr, 10) || 0, 0);
        setCarryLessSum(sum);
    };

    const encodeToMayan = (number) => {
        // Simple encoding logic for demonstration; expand as needed
        const mayanSymbol = ['.', '|', 'M', 'X']; // Example symbols
        const encoded = mayanSymbol[number % 4];
        setMayanDisplay(encoded);
    };

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        calculateCarryLessSum(); // Update sum on input change
        encodeToMayan(value); // Update Mayan encoding on input change
    };

    return (
        <div>
            <h1>CMP Console</h1>
            {inputs.map((input, index) => (
                <input key={index} type="number" value={input} onChange={(e) => handleInputChange(index, e.target.value)} />
            ))}
            <div>
                <h2>Pascal's Triangle:</h2>
                <pre>{JSON.stringify(pascal, null, 2)}</pre>
            </div>
            <div>
                <h2>Carry-less Sum: {carryLessSum}</h2>
            </div>
            <div>
                <h2>Mayan Encoding: {mayanDisplay}</h2>
            </div>
        </div>
    );
};

export default CMPConsole;

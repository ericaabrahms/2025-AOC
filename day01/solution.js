export const part2_v2 = (input) => {
  const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  let timesPassedZero = 0;
  let val = 50;
  for (const line of lines) {
    const op = line[0] === 'L' ? -1 : 1;
    const steps = parseInt(line.slice(1));
    for (let i = 0; i < steps; i++) {
      if (val === -1) val = 99;
      val += op;
      if (val === 100) val = 0;
      if (val === 0) timesPassedZero++;
    }
  }
  return timesPassedZero;
};
// Day 1 Solution

function parseLine(line) {
  line = line.trim();
  if (line[0] != 'L' && line[0] != 'R') {
    throw new Error(`Invalid line: ${line}`);
  }
  return (line[0] == 'L' ? -1 : 1) * parseInt(line.slice(1))
}

export const day01 = {
  part1: (input) => {
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const startingIndex = 50;
    let currentIndex = startingIndex;
    let zeroCounter = 0;

    lines.forEach(line => {
        const code = parseLine(line);
        currentIndex = (100 + (currentIndex + code)) % 100
        if (!currentIndex) zeroCounter++
    })

    return zeroCounter;
  }, 

  part2: (input) => {
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const startingIndex = 50;
    let currentIndex = startingIndex;
    let zeroCounter = 0;

    lines.forEach(line => {
        const code = parseLine(line);
        const tempCode = currentIndex + code

        if (code % 100) {
            const landsOnZero = !((100 + tempCode) % 100)
            const goesNegative = currentIndex && (tempCode % 100 !== (100 + tempCode) % 100)
            const goesPositive = tempCode > 99
    
            if (landsOnZero || goesNegative || goesPositive) {
                zeroCounter++
            }
        } 


        const hundos = Math.abs(parseInt(code / 100))
        zeroCounter += hundos; 

        // set the code 
        currentIndex = (100 + tempCode) % 100
    })

    
    // Your solution here
    console.log('Processing', lines.length, 'lines');
    
    return zeroCounter;
  }
};

// For testing with sample data


import fs from 'fs';
import path from 'path';

if (import.meta.url === `file://${process.argv[1]}`) {
  // Run directly with: node day01/solution.js
  const inputPath = path.resolve(path.dirname(process.argv[1]), 'input.txt');
  let input = '';
  try {
    input = fs.readFileSync(inputPath, 'utf-8');
  } catch (err) {
    console.error('Could not read input.txt:', err.message);
    process.exit(1);
  }
  console.log('=== Day 1 Input.txt Test ===');
  console.log('Part 1:', day01.part1(input));
  console.log('Part 2:', day01.part2(input));
  console.log('Part 2 v2:', part2_v2(input));
}
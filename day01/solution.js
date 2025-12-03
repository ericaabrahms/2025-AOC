// Day 1 Solution

function parseLine(line) {
    return (line[0] == 'L' ? -1 : 1) * parseInt(line.slice(1))
}

export const day01 = {
  part1: (input) => {
    const lines = input.split('\n').filter(line => line.length > 0);
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
    const lines = input.split('\n').filter(line => line.length > 0);
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
const sampleInput = `sample
input
here`;

if (import.meta.url === `file://${process.argv[1]}`) {
  // Run directly with: node day01/solution.js
  console.log('=== Day 1 Sample Test ===');
  console.log('Part 1:', day01.part1(sampleInput));
  console.log('Part 2:', day01.part2(sampleInput));
}
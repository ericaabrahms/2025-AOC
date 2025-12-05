// Day 2 Solution

function parseInput(input) {
  return input.split(',') .map(range => {
    return range.split('-').map(num => parseInt(num))
  })
}


export const day02 = {
  hasDoubledUpDigits: (num) => { 
    const numberOfDigits = Math.floor(Math.log10(num)) + 1
    const halfOfNumberOfDigits = numberOfDigits / 2
    if (!(numberOfDigits % 2)) {
      const lastHalfOfDigits = num % 10 ** halfOfNumberOfDigits
      const firstHalfOfDigits = Math.floor( num / 10 ** halfOfNumberOfDigits)
      return firstHalfOfDigits === lastHalfOfDigits
    } 

    return false  
  },
  hasDuplicatedDigits: (num) => { 
    const numberOfDigits = Math.floor(Math.log10(num)) + 1
    for (let numberOfSegments = 2; numberOfSegments <= numberOfDigits; numberOfSegments++) {
      if (!(numberOfDigits % numberOfSegments)) {
        const digitsPerSegment = numberOfDigits / numberOfSegments;
        let firstSegment

        for (let seg = 0; seg < numberOfSegments; seg++) {
            const cutoffDigit = seg * digitsPerSegment // exclusive (10s place = 2, 100s place = 3)
            const startingDigit = (seg + 1) * digitsPerSegment // inclusive (10s place = 2, 100s place = 3)
            let segment = Math.floor(( num % 10 ** startingDigit) / 10 ** cutoffDigit)

            if (seg === 0) { firstSegment = segment }
            else if (firstSegment !== segment) break;

            if (seg === numberOfSegments - 1) return true;
        }
      }
    }
    return false
  },
  part1: (input) => {
    let sumOfInvalidIds = 0;
    const ranges = parseInput(input)    
    
    ranges.forEach(range => {
      for (let n = range[0]; n <= range[1]; n++) {
        if (day02.hasDoubledUpDigits(n)) {
          sumOfInvalidIds += n;
        }
      }
    })

    return sumOfInvalidIds;
  }, 

  part2: (input) => {
    let sumOfInvalidIds = 0;
    const ranges = parseInput(input)    
    
    ranges.forEach(range => {
      for (let n = range[0]; n <= range[1]; n++) {
        if (day02.hasDuplicatedDigits(n)) {
          sumOfInvalidIds += n;
        }
      }
    })

    return sumOfInvalidIds;
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
// Day 2 Solution

function parseInput(input) {
  return input.split(',') .map(range => {
    return range.split('-').map(num => parseInt(num))
  })
}


export const day03 = {
  findBiggestTwoDigitNumber: (numberString) => {
    let numbers = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0 }

    let digits = numberString.split('').reduce((acc, currVal, currIndex, arr) => {
      let num = numbers[currVal]
      if (currIndex < arr.length - 1 && num > acc.big) {
        acc.big = num;
        acc.small = 0
      } else if (num > acc.small ) {
        acc.small = num
      }

      return acc

    }, {big: 0, small: 0})

    return (digits.big * 10) + digits.small

  },
  part1: (input) => {
    let sumBiggestJoltage = 0;
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    lines.forEach(line => {
      sumBiggestJoltage += day03.findBiggestTwoDigitNumber(line)
    });

    return sumBiggestJoltage;
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
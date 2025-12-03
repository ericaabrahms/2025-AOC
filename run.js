#!/usr/bin/env node

import { readInput, runDay } from './index.js';

const day = process.argv[2];

if (!day) {
  console.log('Usage: npm run day <day_number>');
  console.log('Example: npm run day 1');
  process.exit(1);
}

const dayNum = parseInt(day);
if (isNaN(dayNum) || dayNum < 1 || dayNum > 25) {
  console.log('Day must be a number between 1 and 25');
  process.exit(1);
}

try {
  const dayPadded = dayNum.toString().padStart(2, '0');
  const { [`day${dayPadded}`]: solution } = await import(`./day${dayPadded}/solution.js`);
  
  runDay(dayNum, solution.part1, solution.part2);
} catch (error) {
  console.log(`No solution found for day ${dayNum}`);
  console.log(`Create ./day${dayNum.toString().padStart(2, '0')}/solution.js first`);
}

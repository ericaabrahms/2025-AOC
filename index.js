import fs from 'fs';
import path from 'path';

// Utility function to read input files
export function readInput(day, filename = 'input.txt') {
  const dayDir = `day${day.toString().padStart(2, '0')}`;
  const filePath = path.join(dayDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File ${filePath} not found. Creating directory...`);
    fs.mkdirSync(dayDir, { recursive: true });
    fs.writeFileSync(filePath, '');
    console.log(`Created ${filePath} - please add your input data`);
    return '';
  }
  
  return fs.readFileSync(filePath, 'utf8').trim();
}

// Helper to parse lines
export function readLines(day, filename = 'input.txt') {
  return readInput(day, filename).split('\n').filter(line => line.length > 0);
}

// Helper to parse numbers
export function readNumbers(day, filename = 'input.txt') {
  return readLines(day, filename).map(Number);
}

// Template function to run both parts
export function runDay(day, part1Fn, part2Fn) {
  console.log(`\n=== Day ${day} ===`);
  
  const input = readInput(day);
  if (!input) {
    console.log('No input data found');
    return;
  }
  
  console.time('Part 1');
  const result1 = part1Fn(input);
  console.timeEnd('Part 1');
  console.log('Part 1:', result1);
  
  console.time('Part 2');
  const result2 = part2Fn(input);
  console.timeEnd('Part 2');
  console.log('Part 2:', result2);
}

// Example usage (uncomment and modify for each day)
// import { day01 } from './day01/solution.js';
// runDay(1, day01.part1, day01.part2);
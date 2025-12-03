# Advent of Code 2024

Quick Node.js boilerplate for solving AoC problems.

## Quick Start

1. **Run a specific day:**
   ```bash
   npm run day 1
   ```

2. **Test with sample data:**
   ```bash
   node day01/solution.js
   ```

## Structure

```
day01/
├── solution.js  # Your code
└── input.txt    # Paste AoC input here
```

## Workflow

1. **Create new day:** Copy `day01/` folder to `day02/`, etc.
2. **Add input:** Paste your AoC input into `dayXX/input.txt`
3. **Code:** Write your solution in `dayXX/solution.js`
4. **Run:** `npm run day XX`

## Utilities Available

- `readInput(day)` - Read raw input string
- `readLines(day)` - Split input into lines
- `readNumbers(day)` - Parse lines as numbers
- `runDay(day, part1Fn, part2Fn)` - Run both parts with timing

## Example Solution Structure

```javascript
export const day01 = {
  part1: (input) => {
    // Your part 1 solution
    return result;
  },
  
  part2: (input) => {
    // Your part 2 solution  
    return result;
  }
};
```

Happy coding! 🎄
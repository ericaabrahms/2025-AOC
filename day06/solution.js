// Day 6 Solution

function parseInput(input) {
  const rows = input.split('\n')
  return rows.map(row => row.split(' ').filter(item => item))
}

export const day06 = {
  part1: (input) => {
    let sumOfSolutions = 0;

    const rows = parseInput(input);
    
    for (let i = 0; i < rows[0].length; i++) {
      let operator = rows[rows.length - 1][i]; 
      let result = operator === '*' ? 1 : 0;

      for (let j = 0; j < rows.length - 1; j++) {
        if (operator === '*') {
          result *= parseInt(rows[j][i])
        } else {
          result += parseInt(rows[j][i])
        }
      }

      sumOfSolutions += result;
    }

    return sumOfSolutions;
  }, 
  part2: (input) => {
    let sumOfSolutions = 0;

    return sumOfSolutions;
  }
};
// Day 6 Solution

function parseInputPartOne(input) {
  const rows = input.split('\n')
  return rows.map(row => row.split(' ').filter(item => item))
}

export const day06 = {
  part1: (input) => {
    let sumOfSolutions = 0;

    const rows = parseInputPartOne(input);
    
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

    const rows = input.split('\n');
    const operatorsIndex = rows.length - 1;
    const rowLength = rows[0].length

    let values = [];
    for (let charIdx = rowLength - 1; charIdx >= 0; charIdx--) {
      console.log(charIdx);

      let result = 0;
      let colValue = '';


      for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {

        let currentCharacter = rows[rowIdx][charIdx];
        if (rowIdx < operatorsIndex) {
          colValue += currentCharacter;
        } else {
          values.push(colValue);
        if (!currentCharacter.trim()) { continue }
          else {
            if (currentCharacter == '+') {
              result = values.reduce((acc, curr) => {
                return acc += parseInt(curr.trim() || 0);
              }, 0)
            } else {
              result = values.reduce((acc, curr) => {
                return acc *= parseInt(curr.trim() || 1);
              }, 1)
            }
            values = []
            sumOfSolutions += result
          }
        }
      }

    }

    return sumOfSolutions;
  }
};
// Day 4 Solution

export const day04 = {
  neighborCount: (row, col, prev, next) => {
    let neighbors = 0;

    if (row[col - 1] < 1) neighbors++
    if (row[col + 1] < 1) neighbors++

    if (prev) {
      if (prev[col - 1] < 1) neighbors++;
      if (prev[col] < 1) neighbors++;
      if (prev[col + 1] < 1) neighbors++;
    }
    if (next) {
      if (next[col - 1] < 1) neighbors++;
      if (next[col] < 1) neighbors++;
      if (next[col + 1] < 1) neighbors++;
    }

    return neighbors
  },
  neighborCountAfterReplacements: (row, col, prev, next, iteration = 0) => {
    let neighbors = 0;
    let threshold = 2 ** iteration;

    if (row[col - 1] < threshold) neighbors++
    if (row[col + 1] < threshold) neighbors++

    if (prev) {
      if (prev[col - 1] < threshold) neighbors++;
      if (prev[col] < threshold) neighbors++;
      if (prev[col + 1] < threshold) neighbors++;
    }
    if (next) {
      if (next[col - 1] < threshold) neighbors++;
      if (next[col] < threshold) neighbors++;
      if (next[col + 1] < threshold) neighbors++;
    }

    return neighbors
  },
  part1: (input) => {
    let accessibleRollsOfPaper = 0;
    const rows = input.split('\n').map(line => line.trim().split('').map(char => char === '@' ? 0 : 1)).filter(line => line.length > 0);

    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      for (let col = 0; col < row.length; col++) {
        if (!row[col] && day04.neighborCount(row, col, rows[r - 1] || null, rows[r + 1] || null) < 4) {
          accessibleRollsOfPaper++
        }
      }
    }

    return accessibleRollsOfPaper;
  }, 
  part2: (input) => {
   let accessibleRollsOfPaper = 0;
    let newlyAccessibleRollsOfPaper = 0;

    const rows = input.split('\n').map(line => line.trim().split('').map(char => char === '@' ? 0 : 1)).filter(line => line.length > 0);

    do {
      newlyAccessibleRollsOfPaper = 0;
      for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        for (let col = 0; col < row.length; col++) {
          if (!row[col] && day04.neighborCount(row, col, rows[r - 1] || null, rows[r + 1] || null) < 4) {
            accessibleRollsOfPaper++;
            newlyAccessibleRollsOfPaper++;
            row[col] = 2 ** (r + 1);
          }
        }
      }
    } while (newlyAccessibleRollsOfPaper > 0)

    return accessibleRollsOfPaper;
  }
};
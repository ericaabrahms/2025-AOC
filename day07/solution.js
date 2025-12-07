// Day 7 Solution

export const day07 = {
  part1: (input) => {
    let numberOfSplittersReached = 0;

    const rows = input.split('\n').map(row => row.split(''));
    const startingIndex = rows[0].indexOf('S');
    
    let tachyonBeamIndices = {};
    tachyonBeamIndices[startingIndex] = true;


    for (let i = 1; i < rows.length/2; i++) {
      let row = rows[i * 2]
      const newBeamIndices = {};

      for (const beamIndex in tachyonBeamIndices) {
        if (row[beamIndex] === '^') {
          numberOfSplittersReached++;
          newBeamIndices[parseInt(beamIndex) - 1] = true;
          newBeamIndices[parseInt(beamIndex) + 1] = true;
        } else {
          newBeamIndices[beamIndex] = true;
        }
      }
      
      tachyonBeamIndices = newBeamIndices
      
    }

    return numberOfSplittersReached;
  }, 
  part2: (input) => {
    const rows = input.split('\n').map(row => row.split(''));
    const startingIndex = rows[0].indexOf('S');
    
    let tachyonBeamIndices = [startingIndex];

    for (let i = 1; i < rows.length/2; i++) {
      let row = rows[i * 2]
      const newBeamIndices = [];

      tachyonBeamIndices.forEach(beamIndex => {
        if (row[beamIndex] === '^') {
          newBeamIndices.push(parseInt(beamIndex) - 1)
          newBeamIndices.push(parseInt(beamIndex) + 1)
        } else {
          newBeamIndices.push(beamIndex);
        }
      })
      
      tachyonBeamIndices = newBeamIndices;
      
    }

    return tachyonBeamIndices.length;
  }
};

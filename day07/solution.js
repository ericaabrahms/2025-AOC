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
    
    let tachyonBeamIndices = {};
    tachyonBeamIndices[startingIndex] = 1;

    for (let i = 1; i < rows.length/2; i++) {
      let row = rows[i * 2];
      const newBeamIndices = {};

      for (const beamIndex in tachyonBeamIndices) {
        const beamCount = tachyonBeamIndices[beamIndex];
        if (row[beamIndex] === '^') {
          newBeamIndices[parseInt(beamIndex) - 1] = (newBeamIndices[parseInt(beamIndex) - 1] || 0) + beamCount;
          newBeamIndices[parseInt(beamIndex) + 1] = (newBeamIndices[parseInt(beamIndex) + 1] || 0) + beamCount;
        } else {
          newBeamIndices[beamIndex] = (newBeamIndices[beamIndex] || 0) + beamCount;
        }
      }
      
      tachyonBeamIndices = newBeamIndices;
    }

    let totalBeams = 0;
    for (const beamIndex in tachyonBeamIndices) {
      totalBeams += tachyonBeamIndices[beamIndex];
    }

    return totalBeams;
  }
};

// Day 8 Solution

export const day08 = {
  euclidianDistance3D: (aStr, bStr) => {
    const a = aStr.split(',').map(coord => parseInt(coord))
    const b = bStr.split(',').map(coord => parseInt(coord))

    return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2)
  },
  getConnectionDistancesFromCoordinatePairs: coordinates => {
    let connections = [];
    // get a list of distances and get the 1000 shortest connections
    for (let i = 0; i < coordinates.length; i++) {
      for (let j = i + 1; j < coordinates.length; j++) {
        if (i !== j) {
          connections.push({a: coordinates[i], b: coordinates[j], distance: day08.euclidianDistance3D(coordinates[i], coordinates[j])})
        }
      }
    }

    return connections;
  },
  addConnectionToCircuit: (connection, circuits) => {


    const firstMatchingCircuit = circuits.find(c => {return c.has(connection.a) || c.has(connection.b)})
    if ( firstMatchingCircuit ) {
      firstMatchingCircuit.add(connection.a);
      firstMatchingCircuit.add(connection.b);

      const lastMatchingCircuit = circuits.findLast(c => {return c.has(connection.a) || c.has(connection.b)});
      if (firstMatchingCircuit !== lastMatchingCircuit) {
        lastMatchingCircuit.forEach(item => {
          firstMatchingCircuit.add(item);
        })
        circuits.splice(circuits.indexOf(lastMatchingCircuit), 1);
      }

    } else {
      circuits.push(new Set([connection.a, connection.b]))
    }
    return circuits;
  },
  part1: (input, numberOfConnections = 1000) => {
    let coordinates = input.split('\n'); 
    let circuits = [];

    const connections = day08.getConnectionDistancesFromCoordinatePairs(coordinates);
    connections.sort((a, b) => a.distance - b.distance).splice(numberOfConnections);
    connections.forEach(c => day08.addConnectionToCircuit(c, circuits));
    
    circuits.sort((a, b) => -(a.size - b.size))

    return circuits[0].size * circuits[1].size * circuits[2].size
  }, 
  part2: (input) => {
    let coordinates = input.split('\n'); 
    let circuits = [];

    const connections = day08.getConnectionDistancesFromCoordinatePairs(coordinates)
      .sort((a, b) => a.distance - b.distance);

    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];
      day08.addConnectionToCircuit(connection, circuits);
      if (circuits[0].size === coordinates.length) {
        const aX = parseInt(connection.a.split(',')[0]);
        const bX = parseInt(connection.b.split(',')[0]);

        return aX * bX;
      }
    }
    
    return 0;
  }
};
                       
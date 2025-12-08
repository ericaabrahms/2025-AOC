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

    let firstMatchingCircuit = circuits.find(c => {return c.includes(connection.a) || c.includes(connection.b)})
    console.log(1, firstMatchingCircuit)
    // let lastMatchingCircuit = circuits.findLast(c => {return c.includes(connection.a) || c.includes(connection.b)})
    if ( firstMatchingCircuit ) {
      // firstMatchingCircuit.push(connection.a).push(connection.b);
    } else {
      circuits.push([connection.a, connection.b])
    }

    return circuits;
  },
  part1: (input, numberOfConnections = 1000) => {
    let coordinates = input.split('\n'); 
    let circuits = [];

    const connections = getConnectionDistancesFromCoordinatePairs(coordinates);

    console.log(connections[0])
    connections.sort((a, b) => a.distance - b.distance).splice(numberOfConnections)
    console.log(connections[0])
    console.log(connections[2])
    day08.addConnectionToCircuit(connections[0], circuits)
    day08.addConnectionToCircuit(connections[2], circuits)
    console.log(circuits)

    
    return 0;
  }, 
  part2: (input) => {
    let totalBeams = 0;
    return totalBeams;
  }
};
                       
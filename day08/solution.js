// Day 8 Solution

export const day08 = {
  euclidianDistance3D: (a, b) => {
    return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2)
  },
  addConnectionToCircuit: (connection, circuits) => {

    let firstMatchingCircuit = circuits.find(c => {return c.includes(connection.a) || c.includes(connection.b)})
    // let lastMatchingCircuit = circuits.findLast(c => {return c.includes(connection.a) || c.includes(connection.b)})
    if ( firstMatchingCircuit ) {
      firstMatchingCircuit.push(connection.a).push(connection.b);
    } else {
      circuits.push([connection.a, connection.b])
    }

    return circuits;
  },
  part1: (input, numberOfConnections = 1000) => {
    let coordinates = input.split('\n').map(coordinate => coordinate.split(',').map(c => parseInt(c)))    
    const connections = [];
    let circuits = []

    // get a list of distances and get the 1000 shortest connections
    for (let i = 0; i < coordinates.length; i++) {
      for (let j = 0; j < coordinates.length - i; j++) {
        if (i !== j) {
          connections.push({a: coordinates[i], b: coordinates[j], distance: day08.euclidianDistance3D(coordinates[i], coordinates[j])})
        }
      }
    }

    connections.sort((a, b) => a.distance - b.distance).splice(numberOfConnections)

    day08.addConnectionToCircuit(connections[0], circuits)
    console.log(circuits)

    
    return 0;
  }, 
  part2: (input) => {
    let totalBeams = 0;
    return totalBeams;
  }
};
                       
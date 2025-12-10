// Day 8 Solution

export const day09 = {
  part1: (input) => {
    let redSquares = input.split('\n').map(sq => sq.split(',').map(s => parseInt(s))); 
    let largestRectangleArea = 0;
    
    for (let i = 0; i < redSquares.length; i++) {
      const a = redSquares[i];

      for (let j = i + 1; j < redSquares.length; j++) {
        const b = redSquares[j];

        const x = Math.abs((a[0] - b[0])) + 1
        const y = Math.abs((a[1] - b[1])) + 1
        const area = x * y
        if (area > largestRectangleArea) {
          largestRectangleArea = area
        }
      }
    }
    return largestRectangleArea;

  }, 
  part2: (input) => {
    let redSquares = input.split('\n').map(sq => sq.split(',').map(s => parseInt(s))); 
    const theMap = day09.makeMap(redSquares);

    let rectangles = [];

    for (let i = 0; i < redSquares.length; i++) {
      const a = redSquares[i];

      for (let j = i + 1; j < redSquares.length; j++) {
        const b = redSquares[j];

        const x = Math.abs((a[0] - b[0])) + 1
        const y = Math.abs((a[1] - b[1])) + 1
        const area = x * y
        rectangles.push({a, b, area})
      }
    }

    rectangles.sort((a, b) => -(a.area - b.area));
    
    for (let l = 0; l < rectangles.length; l++) {
      if (day09.isRectangleInsideBoundaries(rectangles[l], theMap)) {
        return rectangles[l].area;
      }
    }

    return 0;
  },
  makeMap: (redSquares) => {
    let rows = [];

    function addBoundaryMarker(x, y) {
      if (!rows[y]) {
        rows[y] = [];
      }
      rows[y][x] = "#"
    }

    for (let i = 0; i < redSquares.length; i++) {
      const [x, y] = redSquares[i];
      const [nextX, nextY] = redSquares[i + 1] || redSquares[0];

      addBoundaryMarker(x, y);

      if (x === nextX) {
        let biggerY = y > nextY ? y : nextY;
        let smallerY = y > nextY ? nextY : y;

        for (let j = smallerY; j <= biggerY; j++) {
          addBoundaryMarker(x, j);
        }
      }

      if (y === nextY) {
        let biggerX = x > nextX ? x : nextX;
        let smallerX = x > nextX ? nextX : x;

        for (let k = smallerX; k <= biggerX; k++) {
          addBoundaryMarker(k, y);
        }
      }
    }

    return rows;
  },
  isRectangleInsideBoundaries: (rectangle, theMap) => {
    const {a: [ax, ay], b: [bx, by]} = rectangle;
    return day09.isPointInsideBoundaries(ax, by, theMap) && day09.isPointInsideBoundaries(bx, ay, theMap);
  },
  isPointInsideBoundaries: (x, y, theMap) => {
    const firstInRow = theMap[y].indexOf('#');
    let xIsInBounds, yIsInBounds;

    if (x >= firstInRow) {
      const lastInRow = theMap[y].lastIndexOf('#');

      if (x <= lastInRow) {
        xIsInBounds = true;
      } else {
        return false;
      }
    }


    // const firstInCol = theMap.findIndex(row => row[x] === '#');
    

    // if (y >= firstInCol) {
    //   const lastInCol = theMap.findLastIndex(row => row[x] === '#');

    //   if (y <= lastInCol) {
    //     yIsInBounds = true;
    //   } else return false;
    // }

    return xIsInBounds;
  },
  xpart2: (input) => {
    let redSquares = input.split('\n').map(sq => sq.split(',')); 
    let boundaries = day09.drawBoundaries(redSquares);
    let rectangles = [];

    for (let i = 0; i < redSquares.length; i++) {
      const a = redSquares[i];

      for (let j = i + 1; j < redSquares.length; j++) {
        const b = redSquares[j];

        const x = Math.abs((a[0] - b[0])) + 1
        const y = Math.abs((a[1] - b[1])) + 1
        const area = x * y
        rectangles.push({a, b, area})
      }
    }

    rectangles.sort((a, b) => -(a.area - b.area));

    for (let i = 0; i < rectangles.length; i++) {
      let rectangle = rectangles[i]
      if (day09.isInsideBoundaries(rectangle, boundaries)) {
        return rectangle.area;
      }
    }

    return 0;
  }, 
  drawBoundaries: (redSquares) => {
    const boundaries = {x:[], y:[]};

    // loop through the 'squares'
    for (let i = 0; i < redSquares.length; i++) {

      const rowToCheck = redSquares[i][1];
      const colToCheck = redSquares[i][0];
      
      // get all the items in the same row and same column
      const itemsInRow = redSquares.filter(item => item[1] == rowToCheck);
      const itemsInCol = redSquares.filter(item => item[0] == colToCheck);


      if (itemsInRow.length > 1) {
        itemsInRow.sort((a, b) => a[0] - b[0])
        boundaries.x[rowToCheck] = [itemsInRow[0][0], itemsInRow[itemsInRow.length - 1][0]];
      }
      if (itemsInCol.length > 1) {
        itemsInCol.sort((a, b) => a[1] - b[1])
        boundaries.y[colToCheck] = [itemsInCol[0][1], itemsInCol[itemsInCol.length - 1][1]];
      }
    }
    return boundaries;
  }, 
};
                       
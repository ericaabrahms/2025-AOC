// Day 2 Solution

function parseInput(input) {
  return input.split(',') .map(range => {
    return range.split('-').map(num => parseInt(num))
  })
}


export const day03 = {
  findBiggestTwoDigitNumber: (numberString) => {
    let numbers = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0 }

    let digits = numberString.split('').reduce((acc, currVal, currIndex, arr) => {
      let num = numbers[currVal]
      if (currIndex <= arr.length - 2 && num > acc.big) {
        acc.big = num;
        acc.small = 0
      } else if (num > acc.small ) {
        acc.small = num;
      }

      return acc;

    }, {big: 0, small: 0})

    return (digits.big * 10) + digits.small

  },
  findBiggestMultiDigitNumber: (numberString, totalDigits = 12 ) => {
    let numbers = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0 }

    let digits = numberString.split('').reduce((acc, currVal, currIndex, arr) => {
      let num = numbers[currVal]
      for (let i = 0; i < totalDigits; i++) {
        const furthestLeftDigitCanBe = (arr.length - totalDigits) + i;

        if (currIndex <= furthestLeftDigitCanBe && num > (acc[i] || 0)) {
          acc[i] = num;
          acc = acc.slice(0, i+1);
          break;
        }
      }
      return acc

    }, [])
    
    // turn the array into a string and then parseInt instead of doing math
    return parseInt(digits.reduce((acc, d) => { return acc + d}, ''))
  },
  part1: (input) => {
    let sumBiggestJoltage = 0;
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    lines.forEach(line => {
      sumBiggestJoltage += day03.findBiggestTwoDigitNumber(line)
    });

    return sumBiggestJoltage;
  }, 

  part2: (input) => {
    let sumBiggestJoltage = 0;
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    lines.forEach(line => {
      sumBiggestJoltage += day03.findBiggestMultiDigitNumber(line)
    });

    return sumBiggestJoltage;
  }
};
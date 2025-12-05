// Day 3 Solution

export const day03 = {
  findBiggestTwoDigitNumber: (numberString) => {
    let digits = numberString.split('').reduce((acc, currVal, currIndex, arr) => {
      let num = parseInt(currVal)
      if (currIndex <= arr.length - 2 && num > acc.big) {
        acc.big = num;
        acc.small = 0
      } else if (num > acc.small ) {
        acc.small = num;
      }

      return acc;

    }, {big: 0, small: 0})

    return (digits.big * 10) + digits.small;
  },
  findBiggestMultiDigitNumber: (numberString, totalDigits = 12 ) => {
    let digits = numberString.split('').reduce((acc, currVal, currIndex, arr) => {
      let num = parseInt(currVal)
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
// Day 5 Solution

function parseInput(input) {
  const [ranges, ids] = input.split('\n\n')
  return [parseRanges(ranges), parseIds(ids)]
}

function parseRanges(rangeString) {
  return rangeString.split('\n').map(range => {
    return range.split('-').map(rangeItem => parseInt(rangeItem))
  })
}
function parseIds(idsString) {
  return idsString.split('\n').map(r => parseInt(r))
}

export const day05 = {
  part1: (input) => {
    let numberOfFreshItems = 0;
    const [ranges, ids] = parseInput(input)

    ids.forEach(id => {
      for (let r = 0; r < ranges.length; r++) {
        if (id >= ranges[r][0] && id <= ranges[r][1] ) {
          numberOfFreshItems++;
          break;
        }
      }
    })
    
    return numberOfFreshItems;
  }, 
  part2: (input) => {
    let numberOfFreshItems = 0;
    const freshItemRanges = [];
    const [ranges] = parseInput(input)

    // sort ranges by start of range
    ranges.sort((a, b) => a[0] - b[0]).forEach(currentRange => {
      let overlappingRange = freshItemRanges.find((knownRange) => {return day05.isOverlapping(currentRange, knownRange) })
      if (overlappingRange) {
        day05.extendRange(currentRange, overlappingRange)
      } else {
        freshItemRanges.push(currentRange)
      }
    })

    freshItemRanges.forEach(range => {
      numberOfFreshItems += 1 + range[1] - range[0] 
    })



    return numberOfFreshItems;
  },
  isOverlapping: (newRange, existingRange) => {
    if (!existingRange) return false;
    const [newStart, newEnd] = newRange;
    const [existingStart, existingEnd] = existingRange;
    const startsOverlap = (newStart >= existingStart && newStart <= existingEnd)
    const endsOverlap = (newEnd >= existingStart && newEnd <= existingEnd)
    const existingRangeInsideNewRange = existingStart > newStart && existingEnd < newEnd
    return startsOverlap || endsOverlap || existingRangeInsideNewRange
  }, 
  extendRange: (newRange, rangeToExtend) => {
    if (newRange[0] < rangeToExtend[0]) {
      rangeToExtend[0] = newRange[0];
    }

    if (newRange[1] > rangeToExtend[1]) {
      rangeToExtend[1] = newRange[1]
    }

    return rangeToExtend;
  }
};
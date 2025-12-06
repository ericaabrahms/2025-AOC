import { describe, it, expect, assert } from 'vitest';
import { day06 } from './day06/solution.js';

describe('day06', () => {
    describe('part1', () => {
        it('provided input', () => {
            const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
`;
            expect(day06.part2(input)).toBe(4277556)
            
        });
    });
    // describe('isOverlapping', () => {
    //     it('returns false when there is no overlap', () => {
    //         expect(day06.isOverlapping([1, 2], [3, 4])).toBe(false);
    //     })
    //     it('returns true when there is overlap at the start', () => {
    //         expect(day06.isOverlapping([1, 3], [2, 4])).toBe(true);
    //     })
    //     it('returns true when there is overlap at the end', () => {
    //         expect(day06.isOverlapping([2, 4], [3, 5])).toBe(true);
    //     })
    //     it('returns true when new range is entirely inside existing range ', () => {
    //         expect(day06.isOverlapping([3, 4], [1, 5])).toBe(true);
    //     })
    //     it('returns true when existing range is entirely inside new range ', () => {
    //         expect(day06.isOverlapping([1, 10], [2, 3])).toBe(true);
    //     })
    //     it('returns true when first and last digits overlap', () => {
    //         expect(day06.isOverlapping([1, 2], [2, 3])).toBe(true);
    //     })
    //     it('returns true when first and last digits overlap', () => {
    //         expect(day06.isOverlapping([3, 4], [2, 3])).toBe(true);
    //     })
    //     it('unexpected behavior case', () => {
    //         expect(day06.isOverlapping([16, 20], [10, 18])).toBe(true);
    //     })
        
    // });
    // describe('extendRange', () => {
    //     it('extends the start of the range', () => {
    //         expect(day06.extendRange([1, 3], [2, 4])).toEqual([1, 4]);
    //     })
    //     it('extends the end of the range', () => {
    //         expect(day06.extendRange([2, 4], [3, 5])).toEqual([2, 5]);
    //     })
    //     it('returns the same range when new range is entirely inside existing range ', () => {
    //         expect(day06.extendRange([3, 4], [1, 5])).toEqual([1, 5]);
    //     })
    //     it('returns the new range values when exiting range is entirely inside new range ', () => {
    //         expect(day06.extendRange([1, 10], [2, 3])).toEqual([1, 10]);
    //     })

    //     it('can handle when first and last digits overlap', () => {
    //         expect(day06.extendRange([1, 2], [2, 3])).toEqual([1, 3]);
    //     })
    //     it('can handle when last and first digits overlap', () => {
    //         expect(day06.extendRange([3, 4], [2, 3])).toEqual([2, 4]);
    //     })
    // })
});

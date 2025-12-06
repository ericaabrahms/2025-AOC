import { describe, it, expect, assert } from 'vitest';
import { day05 } from './day05/solution.js';

describe('day05', () => {
    describe('part2', () => {
        it('provided input', () => {
            const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;
            expect(day05.part2(input)).toBe(14)
            
        });
    });
    describe('isOverlapping', () => {
        it('returns false when there is no overlap', () => {
            expect(day05.isOverlapping([1, 2], [3, 4])).toBe(false);
        })
        it('returns true when there is overlap at the start', () => {
            expect(day05.isOverlapping([1, 3], [2, 4])).toBe(true);
        })
        it('returns true when there is overlap at the end', () => {
            expect(day05.isOverlapping([2, 4], [3, 5])).toBe(true);
        })
        it('returns true when new range is entirely inside existing range ', () => {
            expect(day05.isOverlapping([3, 4], [1, 5])).toBe(true);
        })
        it('returns true when existing range is entirely inside new range ', () => {
            expect(day05.isOverlapping([1, 10], [2, 3])).toBe(true);
        })
        it('returns true when first and last digits overlap', () => {
            expect(day05.isOverlapping([1, 2], [2, 3])).toBe(true);
        })
        it('returns true when first and last digits overlap', () => {
            expect(day05.isOverlapping([3, 4], [2, 3])).toBe(true);
        })
        it('unexpected behavior case', () => {
            expect(day05.isOverlapping([16, 20], [10, 18])).toBe(true);
        })
        
    });
    describe('extendRange', () => {
        it('extends the start of the range', () => {
            expect(day05.extendRange([1, 3], [2, 4])).toEqual([1, 4]);
        })
        it('extends the end of the range', () => {
            expect(day05.extendRange([2, 4], [3, 5])).toEqual([2, 5]);
        })
        it('returns the same range when new range is entirely inside existing range ', () => {
            expect(day05.extendRange([3, 4], [1, 5])).toEqual([1, 5]);
        })
        it('returns the new range values when exiting range is entirely inside new range ', () => {
            expect(day05.extendRange([1, 10], [2, 3])).toEqual([1, 10]);
        })

        it('can handle when first and last digits overlap', () => {
            expect(day05.extendRange([1, 2], [2, 3])).toEqual([1, 3]);
        })
        it('can handle when last and first digits overlap', () => {
            expect(day05.extendRange([3, 4], [2, 3])).toEqual([2, 4]);
        })
    })
});

import { describe, it, expect } from 'vitest';
import { day04 } from './day04/solution.js';

describe('day04', () => {
    describe('part1', () => {
        it('provided test', () => {
            const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;
            const result = day04.part1(input);
            expect(result).toBe(13);
        });
    });
    describe('neighborCount', () => {
        let row0 = [1, 0, 0];
        let row1 = [0, 0, 1];
        let row2 = [0, 0, 1];

        it('0, 0', () => {
            expect(day04.neighborCount(row0, 0, null, row1 )).toBe(3)
        })
        it('1, 1', () => {
            expect(day04.neighborCount(row1, 1, row0, row2 )).toBe(5)
        })
        it('1, 2', () => {
            expect(day04.neighborCount(row1, 2, row0, row2 )).toBe(4)
        })
        
    })
        describe('neighborCountAfterReplacements', () => {
        let row0 = [1, 0, 0];
        let row1 = [0, 0, 1];
        let row2 = [0, 0, 1];

        it('0, 0', () => {
            expect(day04.neighborCountAfterReplacements(row0, 0, null, row1 )).toBe(3)
        })
        it('1, 1', () => {
            expect(day04.neighborCountAfterReplacements(row1, 1, row0, row2 )).toBe(5)
        })
        it('1, 2', () => {
            expect(day04.neighborCountAfterReplacements(row1, 2, row0, row2 )).toBe(4)
        })
        
    })
});

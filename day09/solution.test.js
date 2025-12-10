import { describe, it, expect, assert } from 'vitest';
import { day09 } from './day09/solution.js';

describe('day09', () => {
    describe.skip('part1', () => {
        it('provided input', () => {
            const input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;
            expect(day09.part1(input, 10)).toBe(50)
            
        });
    });
    describe.skip('drawBoundaries', () => {
        it('provided input', () => {
            const input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;

            const expectedOutput = {x: [], y: []}
            expectedOutput.x[1] = [7, 11];
            expectedOutput.x[3] = [2, 7];
            expectedOutput.x[5] = [2, 9];
            expectedOutput.x[7] = [9, 11];

            expectedOutput.y[2] = [3, 5];
            expectedOutput.y[9] = [5, 7];
            expectedOutput.y[7] = [1, 3];
            expectedOutput.y[11] = [1, 7];

            let result = day09.drawBoundaries(input.split('\n').map(i => i.split(',')))
            expect(result.x).toContain([7, 11])
        });
    });
    
    describe('part2', () => {
        it('provided input', () => {
            const input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;
            expect(day09.part2(input)).toBe(24)
        });
    });
});

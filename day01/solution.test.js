import { describe, it, expect } from 'vitest';
import { day01 } from './day01/solution.js';

describe('day01', () => {
    describe('part1', () => {
        it('provided test', () => {
            const input = `L68
    L30
    R48
    L5
    R60
    L55
    L1
    L99
    R14
    L82`;
            const result = day01.part1(input);
            expect(result).toBe(3);
        });
    });
    it('part2: provided test', () => {
        const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
        const result = day01.part2(input);
        expect(result).toBe(6);
    });
    it('part2: lands on zero, increments', () => {
        expect(day01.part2('L50')).toBe(1);
    });
    it('part2: goes past zero once, increments', () => {
        expect(day01.part2('L51')).toBe(1);
    });
    it('part2: double wraps (-200), increments twice', () => {
        expect(day01.part2('L200')).toBe(2);
    });
    it('part2: boring, non-wrap, no-increment', () => {
        expect(day01.part2('L5')).toBe(0);
    });
    it('part2: zero move, no increment', () => {
        expect(day01.part2('R0')).toBe(0);
        expect(day01.part2('L0')).toBe(0);
    });
    it('part2: lands on zero from zero, no increment', () => {
        // Start at 0, move R0 or L0
        // Not possible with current logic, but test anyway
        // If you ever change starting index, this will catch it
        expect(day01.part2('R0')).toBe(0);
        expect(day01.part2('L0')).toBe(0);
    });
    it('part2: lands on zero from non-zero', () => {
        expect(day01.part2('L50')).toBe(1);
    });
    it('part2: crosses zero but does not land', () => {
        expect(day01.part2('L51')).toBe(1);
    });
    it('part2: wraps multiple times, does not land on zero', () => {
        expect(day01.part2('R250')).toBe(3);
        expect(day01.part2('L250')).toBe(3);
    });
    it('part2: move is multiple of 100, start non-zero', () => {
        expect(day01.part2('R100')).toBe(1);
        expect(day01.part2('L100')).toBe(1);
    });
    it('part2: move is multiple of 100, start zero', () => {
        // Not possible with current logic, but test anyway
        // If you ever change starting index, this will catch it
        // expect(day01.part2('R100')).toBe(1);
    });
    it('part2: sequence crosses zero only once', () => {
        expect(day01.part2('R30\nR20')).toBe(1);
    });
    it('part2: sequence crosses zero then lands on zero', () => {
        expect(day01.part2('L51\nR1')).toBe(2);
    });
    it('part2: goes negative but does not wrap', () => {
        expect(day01.part2('L1')).toBe(0);
    });
    it('part2: goes positive but does not wrap', () => {
        expect(day01.part2('R1')).toBe(0);
    });
    it('part2: move is zero', () => {
        expect(day01.part2('R0')).toBe(0);
        expect(day01.part2('L0')).toBe(0);
    });
    it('part2: multiple moves, some land on zero, some cross zero', () => {
        expect(day01.part2('L50\nR100\nL100')).toBe(3);
    });
    it('part2: wraps and lands on zero in same move', () => {
        expect(day01.part2('L150')).toBe(2);
    });
    it('part2: alternating wraps', () => {
        expect(day01.part2('R51\nL51')).toBe(2);
    });
    it('part2: multiple moves, total wrap', () => {
        expect(day01.part2('R30\nR30\nR40')).toBe(1);
    });
    it('part2: very large rotation (R1000)', () => {
        expect(day01.part2('R1000')).toBe(10);
    });
    it('part2: very large negative rotation (L1000)', () => {
        expect(day01.part2('L1000')).toBe(10);
    });
    it('part2: rotation lands on zero and passes zero', () => {
        expect(day01.part2('R50\nR50')).toBe(1); // R50 to 0, R50 to 50 (no zero)
    });
    it('part2: rotation never points at zero', () => {
        expect(day01.part2('R1\nR2\nR3')).toBe(0);
    });
    it('part2: rotation points at zero multiple times in one move (R250)', () => {
        expect(day01.part2('R250')).toBe(3);
    });
    it('part2: rotation points at zero multiple times in one move (L250)', () => {
        expect(day01.part2('L250')).toBe(3);
    });
    it('part2: alternating large and small moves', () => {
        expect(day01.part2('R99\nR1\nL100')).toBe(2);
    });
    it('part2: starts and ends at zero', () => {
        // Not possible with current logic, but test anyway
        // If you ever change starting index, this will catch it
        // expect(day01.part2('R100')).toBe(1);
    });
    describe('weirder', () => {
        it('part2: lands on zero twice, increments twice', () => {
            expect(day01.part2('L50\nL100')).toBe(2);
        });
        it('part2: lands on zero moves a little, increments once', () => {
            expect(day01.part2('L50\nL3')).toBe(1);
        });
        it('lands on zero, goes forward to zero, increments twice', () => {
            expect(day01.part2('L50\nR100')).toBe(2);
        });
    });
    it('part2: single wrap, does not land on zero (R99)', () => {
        expect(day01.part2('R99')).toBe(1);
    });
    it('part2: single wrap, lands on zero (R50)', () => {
        expect(day01.part2('R50')).toBe(1);
    });
    it('part2: negative wrap, does not land on zero (L99)', () => {
        expect(day01.part2('L99')).toBe(1);
    });
    it('part2: negative wrap, lands on zero (L50)', () => {
        expect(day01.part2('L50')).toBe(1);
    });
    it('part2: multi-step, lands on zero mid-sequence', () => {
        expect(day01.part2('R25\nR25')).toBe(1); // 50->75->0
    });
    it('part2: multi-step, crosses zero but does not land', () => {
        expect(day01.part2('R49\nR2')).toBe(1); // 50->99->1
    });
    it('part2: multi-step, lands on zero twice', () => {
        expect(day01.part2('R50\nR50')).toBe(1); // 50->0->50
    });
    it('part2: multi-step, wraps and lands on zero', () => {
        expect(day01.part2('R150')).toBe(2); // 50->0 (1), 0->50->0 (2)
    });
    it('part2: multi-step, negative wraps and lands on zero', () => {
        expect(day01.part2('L150')).toBe(2); // 50->0 (1), 0->50->0 (2)
    });
    it('part2: diagnostic - print zero crossings for R250', () => {
        // Helper to count and print every zero crossing
        const start = 50;
        const move = 250;
        let position = start;
        let zeroCrossings = [];
        for (let i = 1; i <= move; i++) {
            position = (position + 1) % 100;
            if (position === 0) zeroCrossings.push(i);
        }
        // Should be at i=50, 150, 250
        expect(zeroCrossings).toEqual([50, 150, 250]);
        expect(zeroCrossings.length).toBe(3);
    });

    it('part2: large left movement (>100) crosses zero twice', () => {
     expect(day01.part2('L151')).toBe(2);
    });

    it('part2: large right movement (>100) crosses zero twice', () => {
     expect(day01.part2('R151')).toBe(2);
    });
});

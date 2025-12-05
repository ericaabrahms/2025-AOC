import { describe, it, expect } from 'vitest';
import { day03 } from './day03/solution.js';

describe('day03', () => {
    describe('part1', () => {
        it('provided test', () => {
            const input = `987654321111111
811111111111119
234234234234278
818181911112111`;
            const result = day03.part1(input);
            expect(result).toBe(357);
        });
    });
    describe('findBiggestTwoDigitNumber', () => {
        it('can find it in 99', () => {
            expect(day03.findBiggestTwoDigitNumber('99')).toBe(99)
        })
        it('can find it in 123', () => {
            expect(day03.findBiggestTwoDigitNumber('123')).toBe(23)
        })
    })
    describe('part2', () => {
        it('provided test', () => {
            const input = `987654321111111
811111111111119
234234234234278
818181911112111`;
            const result = day03.part2(input);
            expect(result).toBe(3121910778619);
        });
    });
    describe('findBiggestMultiDigitNumber', () => {
        it('can find it in 987654321111111', () => {
            expect(day03.findBiggestMultiDigitNumber('987654321111111')).toBe(987654321111)
        })
        it('can find it in 811111111111119', () => {
            expect(day03.findBiggestMultiDigitNumber('811111111111119')).toBe(811111111119)
        })
        it('can find it in 234234234234278', () => {
            expect(day03.findBiggestMultiDigitNumber('234234234234278')).toBe(434234234278)
        })
        it('can find it in 818181911112111', () => {
            expect(day03.findBiggestMultiDigitNumber('818181911112111')).toBe(888911112111)
        })
    })
});

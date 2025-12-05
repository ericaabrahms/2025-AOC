import { describe, it, expect } from 'vitest';
import { day02 } from './day02/solution.js';

describe('day02', () => {
    describe('part1', () => {
        it('provided test', () => {
            const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;
            const result = day02.part1(input);
            expect(result).toBe(1227775554);
        });
    });
    describe('doubleUpDigits', () => {
        it('passes 2 digit duplicates', () => {
            expect(day02.hasDoubledUpDigits(22)).toBe(true)
        });
        it('fails 2 digit non-duplicates', () => {
            expect(day02.hasDoubledUpDigits(23)).toBe(false)
        });
        it('fails 3 digit numbers', () => {
            expect(day02.hasDoubledUpDigits(323)).toBe(false)
        });
    });
    describe('hasDuplicatedDigits', () => {
        it('passes 2 digit duplicates', () => {
            expect(day02.hasDuplicatedDigits(22)).toBe(true)
        });
        it('fails 2 digit non-duplicates', () => {
            expect(day02.hasDuplicatedDigits(23)).toBe(false)
        });
        it('passes 3 digit numbers that are all the same', () => {
            expect(day02.hasDuplicatedDigits(333)).toBe(true)
        });
        it('fails 3 digit numbers that are all different', () => {
            expect(day02.hasDuplicatedDigits(345)).toBe(false)
        });
        it('passes 6 digit numbers with 3 dupes', () => {
            expect(day02.hasDuplicatedDigits(323232)).toBe(true)
        });
        it('fails 6 digit numbers with no dupes', () => {
            expect(day02.hasDuplicatedDigits(123456)).toBe(false)
        });
    })
   /*  it('part2: provided test', () => {
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
        const result = day02.part2(input);
        expect(result).toBe(6);
    }); */
    /* it('part2: lands on zero, increments', () => {
        expect(day02.part2('L50')).toBe(1);
    }); */
});

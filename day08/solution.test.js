import { describe, it, expect, assert } from 'vitest';
import { day08 } from './day08/solution.js';

describe('day08', () => {
    describe('euclidianDistance3D', () => {
        it('origin to 1, 1, 1', () => {
            expect(day08.euclidianDistance3D('0,0,0', '1,1,1')).toBe(Math.sqrt(3))
        })
        it('345 triangle', () => {
            expect(day08.euclidianDistance3D('0,3,0', '4,0,0')).toBe(5)
        })
    });
    describe('getConnectionDistancesFromCoordinatePairs', () => {
        const coordinates = ['0,0,0', '1,1,1', '2,2,2'];
        const result = day08.getConnectionDistancesFromCoordinatePairs(coordinates);

        it('generates the right number of pairs', () => {
            expect(result.length).toBe(3);
        })
    })
    describe('addConnectionToCircuit', () => {
        it('adds to Empty Circuit', () => {
            const circuits = [];
            const connection = {a: '1,1,1', b: '0,0,0', distance: 1.67}
            const result = day08.addConnectionToCircuit(connection, circuits);
            expect(circuits[0]).toContainEqual(connection.a)
            expect(circuits[0]).toContainEqual(connection.b)
            expect(circuits[0].size).toBe(2)
            expect(result.length).toBe(1)
        })
        it('adds to existing circuit', () => {
            const circuits = [new Set(['1,1,1', '2,2,2'])];
            const connection = {a: '1,1,1', b: '0,0,0', distance: 1.67}
            day08.addConnectionToCircuit(connection, circuits);
            expect(circuits[0]).toContainEqual(connection.a)
            expect(circuits[0]).toContainEqual(connection.b)
            expect(circuits[0].size).toBe(3)
            expect(circuits.length).toBe(1)
        })
        it('adds new circuit', () => {
            const circuits = [new Set(['1,1,1', '2,2,2'])];
            const connection = {a: '3,3,3', b: '0,0,0', distance: 1.67}
            day08.addConnectionToCircuit(connection, circuits);
            expect(circuits[1]).toContainEqual(connection.a)
            expect(circuits[1]).toContainEqual(connection.b)
            expect(circuits[1].size).toBe(2)
            expect(circuits.length).toBe(2)
        })
        it('adds bridge circuit', () => {
            const circuits = [new Set(['1,1,1', '2,2,2']), new Set(['0,0,0', '3,3,3'])];
            const connection = {a: '3,3,3', b: '2,2,2', distance: 1.67}
            day08.addConnectionToCircuit(connection, circuits);
            expect(circuits[0]).toContainEqual(connection.a)
            expect(circuits[0]).toContainEqual(connection.b)
            expect(circuits[0].size).toBe(4)
            expect(circuits.length).toBe(1)
        })
    });

    describe('part1', () => {
        it('provided input', () => {
            const input = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;
            expect(day08.part1(input, 10)).toBe(40)
            
        });
    });
    describe('part2', () => {
        it('provided input', () => {
            const input = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;
            expect(day08.part2(input)).toBe(25272)
        });
    });
});

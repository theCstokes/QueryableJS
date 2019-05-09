import Queryable from "../index";

describe('Queryable', () => {
    describe('filter', () => {
        let array: number[];
        let q: Queryable<number>;
        beforeEach(() => {
            array = Array.from({ length: 10 }).map((_, i) => i);
            q = Queryable.from(array)
        });
        it('filter', () => {
            const f1 = (x: any) => x % 2 === 0;
            let r1 = array.filter(f1);
            let r2 = q.filter(f1);
            expect(r2).toEqual(r1);
        });
    });

    describe('map', () => {
        let array: number[];
        let q: Queryable<number>;
        beforeEach(() => {
            array = Array.from({ length: 10 }).map((_, i) => i);
            q = Queryable.from(array)
        });
        it('map', () => {
            const f1 = (x: any) => x % 2 === 0;
            let r1 = array.map(f1);
            let r2 = q.map(f1);
            expect(r2).toEqual(r1);
        });
    });

    describe('find', () => {
        let array: number[];
        let q: Queryable<number>;
        beforeEach(() => {
            array = Array.from({ length: 10 }).map((_, i) => i);
            q = Queryable.from(array)
        });
        it('find', () => {
            const f1 = (x: any) => x % 2 === 0;
            let r1 = array.find(f1);
            let r2 = q.find(f1);
            expect(r2).toEqual(r1);
        });
    });
});

export default class Queryable<T> implements Array<T>, IterableIterator<T> {
    private array: T[];
    private constructor(array: T[]) {
        this.array = array;
    }

    public static from<T>(array: T[]): Queryable<T> {
        return new Queryable(array);
    }

    [n: number]: T;

    // length: number;

    public get length(): number {
        return this.array.length;
    }

    concat(...items: ConcatArray<T>[]): T[];
    concat(...items: (ConcatArray<T> | T)[]): T[];
    concat(...items: (ConcatArray<T> | T)[]): T[] {
        return new Queryable(this.array.concat(...items));
    }

    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
        return this.array.every(callbackfn);
    }

    filter<S extends T>(callbackfn: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
    filter(callbackfn: any, thisArg?: any): any {
        return this.array.filter(callbackfn);
    }

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        this.array.forEach(callbackfn);
    }

    indexOf(searchElement: T, fromIndex?: number): number {
        return this.array.indexOf(searchElement, fromIndex);
    }

    join(separator?: string): string {
        return this.array.join(separator);
    }

    lastIndexOf(searchElement: T, fromIndex?: number): number {
        return this.array.lastIndexOf(searchElement, fromIndex);
    }

    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        return this.array.map(callbackfn);
    }

    pop(): T | undefined {
        return this.array.pop();
    }

    push(...items: T[]): number {
        return this.array.push(...items)
    }

    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    reduce(callbackfn: any, initialValue?: any): any {
        return this.array.reduce(callbackfn, initialValue);
    }

    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    reduceRight(callbackfn: any, initialValue?: any): any {
        return this.array.reduceRight(callbackfn, initialValue);
    }

    reverse(): T[] {
        return this.array.reverse()
    }

    shift(): T | undefined {
        return this.array.shift();
    }

    slice(start?: number, end?: number): T[] {
        return this.array.slice(start, end);
    }

    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean {
        return this.array.some(callbackfn);
    }

    sort(compareFn?: (a: T, b: T) => number): this {
        return this.array.sort(compareFn) as this;
    }

    splice(start: number, deleteCount?: number): T[];
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    splice(start: number, deleteCount?: number, ...items: T[]): T[] {
        return this.array.splice(start, deleteCount, ...items);
    }

    unshift(...items: T[]): number {
        return this.array.unshift(...items);
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }

    [Symbol.unscopables](): { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean } {
        return { copyWithin: false, entries: false, fill: false, find: false, findIndex: false, keys: false, values: false };
    }

    copyWithin(target: number, start: number, end?: number): this {
        return undefined;
    }

    entries(): IterableIterator<[number, T]> {
        return undefined;
    }

    fill(value: T, start?: number, end?: number): this {
        return undefined;
    }

    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined;
    find(predicate: any, thisArg?: any): any {
        return this.array.find(predicate, thisArg);
    }

    findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number {
        return this.array.findIndex(predicate, thisArg);
    }

    keys(): IterableIterator<number> {
        return this.array.keys();
    }

    values(): IterableIterator<T> {
        return this.array.values();
    }

    next(value?: any): IteratorResult<T> {
        return this.array[Symbol.iterator]().next(value);
    }

    return(value?: any): IteratorResult<T> {
        return this.array[Symbol.iterator]().return(value);
    }

    throw(e?: any): IteratorResult<T> {
        return this.array[Symbol.iterator]().throw(e);
    }

    // public filter()
}

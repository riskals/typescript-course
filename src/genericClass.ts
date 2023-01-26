class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elments: T[]): void {
        this.data.push(...elments);
    }

    getAll(): T[] {
        return this.data;
    }
}

// let numbers = new List<number>(1, 2, 3);
// numbers.add(4);
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());

let random = new List<number | string>(1, "a", "b", 2);
random.add("riska");
random.add(891);
random.addMultiple(123, "sholikha");
console.log(random.getAll());


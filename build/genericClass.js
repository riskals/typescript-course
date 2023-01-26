"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elments) {
        this.data.push(...elments);
    }
    getAll() {
        return this.data;
    }
}
// let numbers = new List<number>(1, 2, 3);
// numbers.add(4);
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());
let random = new List(1, "a", "b", 2);
random.add("riska");
random.add(891);
random.addMultiple(123, "sholikha");
console.log(random.getAll());

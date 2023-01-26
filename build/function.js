"use strict";
// tipe data pada balikan function
function getName() {
    return "hello, my name is Riska";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("print name");
}
printName();
//argument types
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(12, 5);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (first, last = "Lailatus") => {
    return first + " " + last;
};
console.log(fullName("Riska"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur(1, 14));

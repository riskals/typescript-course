// tipe data pada balikan function

function getName(): string {
    return "hello, my name is Riska";
}

console.log(getName());

function getAge(): number {
    return 123;
}

function printName(): void {
    console.log("print name");
}

printName();


//argument types

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const result = multiply(12, 5);
console.log(result);


// function as type

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}


// default parameter
const fullName = (first: string, last: string = "Lailatus"): string => {
    return first + " " + last;
}

console.log(fullName("Riska"));



// optional parameter
const getUmur = (val1: number, val2: number): string => {
    return val1 + " " + val2;
}

console.log(getUmur(1, 14));



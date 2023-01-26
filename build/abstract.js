"use strict";
// abstract class  adalah sebuah class yg tdk bisa di instansiasi langsung dari luar class itu sendiri melainkan hrs meng exstends sebuah class selanjutnya
class Vehicle {
    start() {
        console.log("brummmm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();

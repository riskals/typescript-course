// abstract class  adalah sebuah class yg tdk bisa di instansiasi langsung dari luar class itu sendiri melainkan hrs meng exstends sebuah class selanjutnya

abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("brummmm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Motorcycle extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motor= new Motorcycle();
console.log(motor.wheels);
motor.start();


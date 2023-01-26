"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
// public = bisa diakses di semua class / di luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunanya
// private = hanay bisa diakses dari class itu sendiri.
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "hey";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
let admin = Admin.getNameRole();
console.log(admin);

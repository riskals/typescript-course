 export class User {
    name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}

// public = bisa diakses di semua class / di luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunanya
// private = hanay bisa diakses dari class itu sendiri.

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin";

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone 
    }

     static getNameRole() {
        return "hey";
    }

    getRole(): {read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        };
    };

    set email(value: string) {
        this._email = value;
    }

    get email(): string {
        return this._email;
    }
}

let admin = Admin.getNameRole();
console.log(admin);



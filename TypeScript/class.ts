export interface patientType {
    name: string;
    age: number;
    address: string;
    getName():string;
    getAge():number;
    getAddress():string;
}

export class Patient implements patientType {
    name;
    age;
    address;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getAddress(): string {
        return this.address;
    }
}
export interface xyz{




let patient1 = new Treat(["ABCd"], { Bp: 123, sugar: 160 });
console.log("Patient Details :" + patient1.getName(), patient1.getAge(), patient1.getAddress());
console.log("Treatment Details :" + patient1.medicine, patient1.test);

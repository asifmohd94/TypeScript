 import {Patient,xyz,patientType} from "./class"
  class Treat extends Patient implements xyz,patientType  {
    patientName = this.getName();
    patientAge = this.getAge();
    patientAddress = this.getAddress();
    medicine: string[];
    test: object;

    constructor(medicine: string[], test: object) {
        super("xavier", 30, "xyz");
        this.medicine = medicine;
        this.test = test
    }

}

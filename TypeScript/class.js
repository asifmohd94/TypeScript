"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Patient = /** @class */ (function () {
    function Patient(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    Patient.prototype.getAge = function () {
        return this.age;
    };
    Patient.prototype.getAddress = function () {
        return this.address;
    };
    return Patient;
}());
var Treat = /** @class */ (function (_super) {
    __extends(Treat, _super);
    function Treat(medicine, test) {
        var _this = _super.call(this, "xavier", 30, "xyz") || this;
        _this.patientName = _this.getName();
        _this.patientAge = _this.getAge();
        _this.patientAddress = _this.getAddress();
        _this.medicine = medicine;
        _this.test = test;
        return _this;
    }
    return Treat;
}(Patient));
var patient1 = new Treat(["ABCd"], { Bp: 123, sugar: 160 });
console.log("Patient Details :" + patient1.getName(), patient1.getAge(), patient1.getAddress());
console.log("Treatment Details :" + patient1.medicine, patient1.test);

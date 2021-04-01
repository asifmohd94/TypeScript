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
Object.defineProperty(exports, "__esModule", { value: true });
var a = "Hello TS";
console.log(a);
var Ans = /** @class */ (function () {
    function Ans() {
    }
    Ans.prototype.test = function () {
        var abc = "Hello TS";
        console.log(abc);
    };
    return Ans;
}());
var ans = new Ans();
ans.test();
var exc = /** @class */ (function () {
    function exc() {
        this.name = "ali";
    }
    exc.prototype.qwe = function () {
        console.log("from parent");
    };
    return exc;
}());
var Abc = /** @class */ (function (_super) {
    __extends(Abc, _super);
    function Abc(num) {
        var _this = _super.call(this) || this;
        _this.num = 10;
        console.log("constructor");
        _this.num = num;
        return _this;
    }
    Abc.prototype.add = function (a, b) {
        _super.prototype.qwe.call(this);
        return a + b;
    };
    Abc.prototype.multi = function (c, d) {
        return c * d;
    };
    return Abc;
}(exc));
var abc = new Abc(10);
console.log(abc.add(1, 2));
console.log(abc.num);
console.log(abc.multi(2, 3));
console.log("hello");
// class Patient{
//     name;
// }

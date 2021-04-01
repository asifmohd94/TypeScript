function add1(n1, n2) {
    return n1 + n2;
}
console.log(add1(1, 2));
/* types
1.) number
2.) string
3.) boolean
4.) object
4.) union
5.) aliase
7.) enum
8.) function
*/
// number
function prod(n1) {
    var ans = 1;
    for (var _i = 0, n1_1 = n1; _i < n1_1.length; _i++) {
        var i = n1_1[_i];
        ans *= i;
    }
    return ans;
}
// string
function getVowels(n1) {
    var ans = '';
    for (var _i = 0, n1_2 = n1; _i < n1_2.length; _i++) {
        var i = n1_2[_i];
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            ans += i;
        }
    }
    return ans;
}
//boolean
function isPrime(num) {
    var bol = true;
    for (var i = 2; i < num; i++) {
        if (num % i == 0 && i != num) {
            bol = false;
        }
    }
    return bol;
}
// object
var obj, _a = {
    name: "abc",
    id: 1
}, string = _a.name, number = _a.id;
obj.name = "xyz";
obj.age = 30;
console.log(obj.age);
// class Patient{
//     name:string;
//     age:number;
//     phone:number;
//     address:string;
//     id_no:number;
//     constructor(name,age,phone,address):object{
//         this.name=name;
//         this.phone=
//     }
// }

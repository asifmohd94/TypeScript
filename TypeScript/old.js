// console.log("Time to get started");
// const obj={};
// const arr=[];
// const bol=true;
// let x;
// function add(n1:number,n2:number,showResult:boolean){
//     if(showResult){
//         console.log(n1+n2);
//     }else
//     return n1 + n2;
// }
// const number1=5;
// const number2=2.8;
// const printResult=true;
// add(number1,number2,printResult);
var array = [];
function rem(n) {
    while (n > 0) {
        var rem_1 = n % 10;
        array.push(rem_1);
        n = Math.floor(n / 10);
    }
    return array;
}
console.log(rem(3789253));

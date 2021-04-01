export {};
let a="Hello TS";
console.log(a);

class Ans{
    test(){
    let abc="Hello TS"
    console.log(abc);    
    }

}
let ans=new Ans();
ans.test();
class exc{
    name:string="ali";
    qwe():void{
        console.log("from parent");
    }
}
class Abc extends exc{
    num:number=10;
    constructor(num:number){
       super();
      console.log("constructor");  
     this.num=num;
    }
    add(a:number,b:number){
        super.qwe();
        return a+b;
    }
    multi(c:number,d:number){
        return c*d;
    }
}
let abc=new Abc(10)
console.log(abc.add(1,2))
console.log(abc.num);
console.log(abc.multi(2,3))
console.log("hello");




// class Patient{
//     name;
    
// }
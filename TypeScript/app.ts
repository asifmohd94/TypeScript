function add1(n1:number,n2:number):number{
    return n1+n2;
}
console.log(add1(1,2));
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
function prod(n1:[number]):number{
let ans=1;
    for(let i of n1){
ans*=i;
}
return ans;
}

// string

function getVowels(n1:string):string{
    let ans='';
    for(let i of n1){
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
            ans+=i;
        }
    }
    return ans;
}

//boolean

function isPrime(num:number):boolean{
    let bol=true;
    for(let i=2;i<num;i++){
        if(num%i==0 && i!=num){
            bol=false;
        }
    }
    return bol;
}



// object

interface objType{
    name:string,
    age:number
}

let obj1:objType ={
    name:"abc",
    age:30,
    
}


// union

let i:number | string=2;
i="abc";


// function 

function sayHello():void{
    return alert("hello");
}

function getMax(arr:number[]):number{
let max=-Infinity;
let ans=0;
for(let i of arr){
    ans=Math.max(max,i);
    max=ans;    
}

    return ans;
}





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

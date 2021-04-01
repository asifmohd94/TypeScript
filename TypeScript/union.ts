function combineNew(n1:number | string,n2:number | string){
    let result;
    if(typeof n1=="number" && typeof n2=='number'){
        result=n1+n2;
    
    }else{
        result=n1.toString() + n2.toString();
    }
return result;
}

let combineNumbers=combineNew(30,26);
console.log(combineNumbers);

let combineNames=combineNew('Abcd','xyz');
console.log(combineNames);
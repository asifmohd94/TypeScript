let data=1;
console.log(data);
data=3;
let prom=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(data);
  },2000)
})

prom.then((data)=>{
  console.log(data);
})

data=2;
console.log(data);

function abc(){
    setTimeout(()=>{
        return "hello";
    },1000)
}

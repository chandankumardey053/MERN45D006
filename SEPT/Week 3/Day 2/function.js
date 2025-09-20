console.log("Hello we are going to start function");

// expressional function

const expressionalFunction =function(){
    console.log("This is a expressional function");
}
expressionalFunction()

// console.log("expressional function")

const arrowFun=(a)=>{
    console.log("This is the arrow function");
    console.log("value is ",a);

}

arrowFun(40)





const arr=[1,2,3,4,5]

// arr.forEach((v,idx)=>{
//     console.log(v);
// }) 



const newArr=arr.map((v)=>{
    return v * 2;
})

console.log(newArr);





const filterArr = arr.filter(()=>{
    return v%2==0
})

console.log(filterArr);





let summation=arr.reduce((sum,accu)=>{
    return sum+accu;
},0)

console.log(summation);





const mark=[10,30,50,60,70,20,55]
const filterMark= mark.filter((v)=>{
    return v>50;
})
console.log(filterMark);





const n=prompt("Enter A Number:");

let dommyArr=[]
for(let i=1;i<=n;i++){
    dommyArr.push(i)
}

console.log(dommyArr);


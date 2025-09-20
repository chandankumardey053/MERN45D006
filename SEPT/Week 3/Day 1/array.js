console.log("Today we are going to learn array methods");

let arr=[85,97,44,37,76,60]
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
let average=sum/arr.length

console.log(sum);
console.log(average);




let newArr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

newArr.shift()
console.log(newArr);
newArr.splice(1,1,"ola")
console.log(newArr);
newArr.push("Amazon")
console.log(newArr);




let printSomething = function(a){
    console.log("Printing",a);
}

printSomething(10)
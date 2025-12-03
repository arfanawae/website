var logic =  "It is true"
var i = 50
var k = !true
console.log(typeof logic);
console.log(typeof i);
console.log(typeof k);


console.log('H\te\tl\tl\to\neveryone');
console.log('\'Hello\'');
console.log('\"Hello\"');
console.log('C:\\Users\\Admin');

var n = 10, pi = 3.14,gt = 'Hello'
console.log(n,pi ,gt)
console.log("n = " + n + ", pi = " + pi + ", gt = " + gt);
console.log("n = %d, pi = %f, gt = %s", n, pi, gt);
console.log(`n = ${n}, pi = ${pi}, gt = ${gt}`);

console.log(parseInt('9'),parseInt(3.14), parseFloat('3.14'), parseInt('Hello'));

var n = 2
for (i=0; i<3; i++){
    console.log("%d x %d = %d", n, i, n*i)
}

var iarray = [0,1,2,3,4,5,6,7,8,9,10,11,12]
iarray.forEach((i)=>{
    console.log("%d x %d = %d", n, i, n*i)
})





var fruits = {0:"Apple", 1:"Banana", 2:"Mango", "3":"Orange"}

for(i=0;i<Object.keys(fruits).length;i++){
    console.log("fruits[%d] = %s", i, fruits[i]);
}

for ([index , item] of Object.entries(fruits)){
    console.log("fruits[%d] = %s", index, fruits);
}

Object.entries(fruits).forEach( entry => {
    (index, item) = entry
    console.log("fruits[%d] = %s", index, item)
});

for (item of Object.values(fruits)){
        console.log("fruit = %s", item);
    }


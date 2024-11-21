const ourmath = require('./ourmath');

let average = ourmath.avg(1,2,3,4,5,6,7,8);
console.log(average);
if (average === 4.5) {
    console.log("avg success");   
}else{
    console.log("avg Failure")
}


let new_set = ourmath.unionTwoSets([1,2,3] , [2,3,4]);
console.log(new_set);
if (new_set[0] === 1 && 
    new_set[1] === 2 &&
    new_set[2] === 3 &&
    new_set[3] === 4 ) {
    console.log("unionTwoSets success ");
    console.log("========================================");
} else {
    console.log("unionTwoSets failure ");
    console.log("========================================");

}




let inter_set = ourmath.intersection([1,2,3] , [2,3,4]);
console.log(inter_set);
if (inter_set[0] === 2 && 
    inter_set[1] === 3 ) {
    console.log("intersection success ");
    console.log("\u062f");
    console.log("========================================");
} else {
    console.log("intersection failure ");
    console.log("========================================");

}


import { avg, unionTwoSets, intersection, max } from './index.js';

let average = avg(1,2,3,4,5,6,7,8);
console.log(average);
if (average === 4.5) {
    console.log("avg success");   
}else{
    console.log("avg Failure")
}


let new_set = unionTwoSets([1,2,3] , [2,3,4]);
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




let inter_set = intersection([1,2,3] , [2,3,4]);
console.log(inter_set);
if (inter_set[0] === 2 && 
    inter_set[1] === 3 ) {
    console.log("intersection success ");
    console.log("========================================");
} else {
    console.log("intersection failure ");
    console.log("========================================");

}



let max_value = max(90 , 123 , 35);
console.log(max_value);
if (max_value === 123 ) {
    console.log("Max success ");
    console.log("========================================");
} else {
    console.log("Max failure ");
    console.log("========================================");

}

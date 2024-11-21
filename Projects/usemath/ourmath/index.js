/**
 * avg function
 * Inputs : nums[]  ...nums
 * sum all numbers 
 * divide sum  on sum.lenght
 * return result
 */

exports.avg = function avg(...nums) {

    let result = 0;
    for (let index = 0; index < nums.length; index++) {
       result  += nums[index];
        
    }

    result /= nums.length;
    return result;
    
}
/**
 * sets union
 * inputs : 2 arrayes .. first_set .. second_set)
 * steps:
 * copy first_set  elements to the result
 * copy from second_set) to the result all elements that is not included in the first_set  .
 * return result 
 */

exports.unionTwoSets = function unionTwoSets(first_set , second_set) {
    let result = [];
    for (let index = 0; index < first_set.length; index++) {
        result.push(first_set[index]);
    }
    for (let i = 0; i < second_set.length; i++) {
        if (!result.includes(second_set[i])) {
            //continue ;
            result.push(second_set[i]);
        } 
        // result.push(second_set[i]);
        
        
    }
    return result ;
    
}

/**
 * sets intersection
 * inputs : 2 array .. first_set .. second_set 
 * steps : 
 * for each item in first_set :
 *    if the item includes in the second set then push it to the result 
 */

exports.intersection = function intersection(first_set , second_set ) {
    let result = [];
    for (let i = 0; i < first_set.length; i++) {
        if (second_set.includes(first_set[i])) {
            result.push(first_set[i]);
        }//else{    result.push(second_set[i]);        }
    }
    return result;
}

/**
 * max
 * inputs : ..nums
 * steps : 
 * max variable = the smallest number value
 * loop for each item in nums
 *  if item > max  then max  = item 
 * return max 
 */


exports.max = function max(...nums) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max){
            max = nums[i]
        }
    }
    return max;
}


//min
//sets difference 
/*

Rating: HARD

Given an array of integers, 
find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.

***** JS Solution *****

*/

const arrayVal = [3, 4, -1, 1];

// basically we're just gonna sort this array and find a gap
function arrayMissing(arrayParam){
	
	arrayParam = arrayParam.sort();
	
	for (let i = 0; i < arrayParam.length; i ++){
		
		if(arrayParam[i] < 0){
			continue;
		} else {
			if (arrayParam[i] + 1 < arrayParam[i+1]){
				return arrayParam[i] + 1;
			}
		}
		
	}
	
}

// call function
let missing = arrayMissing(arrayVal);

// show result
console.log(missing);




/* End JS Solution */
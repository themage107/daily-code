/** Daily Challenge 5-18-2022 **/

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

/** JavaScript Solution **/

// example given numbers
let numbersArray = [10, 15, 3, 7];
let k = 17;

function checker(values, checkVal){

	// array length
	for(let i = 0; i < values.length; i++){

		// interior length (didn't say can't be the same number)
		for(let j = 0; j < values.length; j++){
		
			if((values[j] + values[i]) % checkVal == 0){
				return true;
			} 
						
		}
	}
}

// challenge final call
checker(numbersArray, k);

/** End JS Solution **/
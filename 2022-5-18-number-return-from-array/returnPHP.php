<?php
/** Daily Challenge 5-18-2022 **/

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?


/** PHP Solution **/

$numbersArray = [10, 15, 3, 7];
$k = 17;

function checker($values, $checkVal){

	// array count
	for($i = 0; $i < count($values); $i++){

		// interior count (didn't say can't be the same number)
		for($j = 0; $j < count($values); $j++){
		
			if(($values[$j] + $values[$i]) % $checkVal == 0){
				return true;
			} 
						
		}
	}
}

// challenge final call
echo checker($numbersArray, $k);

/** End PHP Solution **/
?>
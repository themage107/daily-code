<?php

/** Daily Challenge 5-18-2022 - Hard **/

// Given an array of integers
// Return a new array such that each element at index i of the new array is the product of all the numbers in the original array except i
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// Bonus no division loop function

/** PHP Solution **/

// basic values
$arrayVals = [1, 2, 3, 4, 5, 6];
$arrayUpdatedVals = [];
$arrayUpdatedValsNoDivision = [];

function productArraySansPos($arrayReturn, $aParam){

	// so we have the value set at 1, could also set the first loop to have an if $i == 0, it's just i value
	$totalVal = $aParam[0];

	// start at one since it's included already
	for ($i = 1; $i < count($aParam); $i++){		
		$totalVal *= $aParam[$i];		
	}
	
	for ($k = 0; $k < count($aParam); $k++){			
		array_push($arrayReturn, ($totalVal / $aParam[$k]));		
	}
	
	return $arrayReturn;

}

function productArraySansPosNoDivision($noDivision, $aParam){
	
	for ($i = 0; $i < count($aParam); $i++){		
		
		// staging var
		$holderVal;
		
		// internally loop it
		for ($k = 0; $k < count($aParam); $k++){		
			
			// same position so ignore it
			if($k == $i){				
				continue;
			} else {
				
				// set to 1 for initial go since we're multiplying accross values
				if(!isset($holderVal)){
					$holderVal = $aParam[$k];				
				} else {
					$holderVal *= $aParam[$k];
				}

			}						
			
		}			
		
		// update the holder to the index
		array_push($noDivision, $holderVal);		
		
		// clear it out
		unset($holderVal);
	}
	
	return $noDivision;
	
}

// call it
$arrayUpdatedVals = productArraySansPos($arrayUpdatedVals, $arrayVals);
$arrayUpdatedValsNoDivision = productArraySansPosNoDivision($arrayUpdatedValsNoDivision, $arrayVals);

// show it
print_r($arrayUpdatedVals);
print_r($arrayUpdatedValsNoDivision);

 /** End PHP Solution **/
 
 ?>
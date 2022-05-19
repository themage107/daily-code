/** Daily Challenge 5-18-2022 - Hard **/

// Given an array of integers
// Return a new array such that each element at index i of the new array is the product of all the numbers in the original array except i
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// Bonus no division loop function

/** JavaScript Solution **/

// basic values
let arrayVals = [1, 2, 3, 4, 5, 6];
let arrayUpdatedVals = [];
let arrayUpdatedValsNoDivision = [];

function productArraySansPos(aParam){

	// so we have the value set at 1, could also set the loop to have an if i == 0, it's just i value
	let totalVal = aParam[0];

	// start at one since it's included already
	for (let i = 1; i < aParam.length; i++){		
		totalVal *= aParam[i];		
	}
	
	for (let k = 0; k < aParam.length; k++){		
		arrayUpdatedVals[k] = (totalVal / aParam[k]);		
	}

}

function productArraySansPosNoDivision(aParam){
	
	for (let i = 0; i < aParam.length; i++){		
		
		// staging var
		let holderVal;
		
		// internally loop it
		for (let k = 0; k < aParam.length; k++){		
			
			// same position so ignore it
			if(k == i){				
				continue;
			} else {
				
				// set to 1 for initial go since we're multiplying accross values
				if(holderVal == undefined){
					holderVal = aParam[k];				
				} else {
					holderVal *= aParam[k];
				}

			}						
			
		}
		
		// update the holder to the index
		arrayUpdatedValsNoDivision[i] = holderVal;
		
	}
	
}

// call it
productArraySansPos(arrayVals);
productArraySansPosNoDivision(arrayVals);

// show it
console.log(arrayUpdatedVals);
console.log(arrayUpdatedValsNoDivision);

 /** End JavaScript Solution **/
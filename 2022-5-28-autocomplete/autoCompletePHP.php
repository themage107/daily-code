<?php
/* 

Implement an autocomplete system. 
That is, given a query string s and a set of all possible query strings, 
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

*/

/* PHP Solution */

$searchString = "de";
$searchPossibilities = ["dog", "deer", "deal"];

function autoComplete($s, $pos){
	
	// return array
	$arr = [];
	
	// regex
	$regexWords = '/^' . $s . "/";

	// loop and check
	for($i = 0; $i < count($pos); $i++){
		
		// if regex works, then push array val to arr
		if(preg_match($regexWords, $pos[$i])){
			array_push($arr, $pos[$i]);
		}
		
	}
	
	return $arr;
	
}

echo implode(', ', autoComplete($searchString, $searchPossibilities));

/* End PHP Solution */
?>
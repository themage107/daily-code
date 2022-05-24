<?php

/*

Given the mapping a = 1, b = 2, ... z = 26, 
and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, 
since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. 
For example, '001' is not allowed.

*/

/***** PHP Solution *****/

$message = "120"; // should have 7 decodes: (1(a), 2(b), 3(c)), (12(al), 3(c)), (1(a), 23(w))
$numberMessages = 0;

function decodeMessage($messageParam, $numberMessagesParam){
	
	// stage an array
	$messageParamArray = [];
	
	// add to array based on string length
	for ($i = 0; $i < strlen($messageParam); $i++){	
		$messageParamArray[$i] = strval(substr($messageParam, $i, 1));
	}
	
	// 10 and 20 are valid entries but create an imaginary letter since a = 1
	// leading zero is invalid
	if(in_array("0", $messageParamArray)){		
		
		$numberMessagesParam = 2;
	
	} else {
		
		// individual letter messages
		$numberMessagesParam += count($messageParamArray);
		
		// loop through to count, cut off 1 minus so we don't hit nonindex
		for($i = 0; $i < count($messageParamArray) - 1; $i ++){					
			if(intval($messageParamArray[$i] . $messageParamArray[$i + 1]) < 27){
				$numberMessagesParam += 2;
			}
		}
		
	}
	
	return $numberMessagesParam;

}

echo decodeMessage($message, $numberMessages);

/***** End PHP Solution *****/

?>
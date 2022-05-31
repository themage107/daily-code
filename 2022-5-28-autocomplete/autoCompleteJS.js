/* 

Implement an autocomplete system. 
That is, given a query string s and a set of all possible query strings, 
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

*/

/* JS Solution */

let string = "de";
let searchPossibilities = ["dog", "deer", "deal"];

function autoComplete(s, pos){
	
	// return array
	let arr = [];
	
	// regex
	let regexWords = '^' + s;
	let regex = new RegExp(regexWords);

	// loop and check
	for(let i = 0; i < pos.length; i++){
		
		// if regex works, then push array val to arr
		if(regex.test(pos[i])){
			arr.push(pos[i]);
		}
		
	}
	
	return arr;
	
}

console.log(autoComplete(string,searchPossibilities));

/* End JS Solution */
/*
Given the root to a binary tree, 
implement serialize(root), 
which serializes the tree into a string, 
and deserialize(s), 
which deserializes the string back into the tree.

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right	


Should Pass:
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'		


************ NOTE ************
The first part of this passes, but I can't get
JavaScript to add a new object as a value and
then recursively run it. Error block marked
in the comments

*/


/***** JavaScript Solution *****/

// class
class Node {
	constructor(val = undefined, left = undefined, right = undefined) {
		
		// object vals
		this.val = val;
		this.left = left;
		this.right = right;	

	}
}


function stringify(arrayParam){
	return arrayParam = arrayParam.join();
}


function binaryTreeSerialize(nodeParam){

	// if the nodeParameter does not exist, push N for null into that array spot
	if(nodeParam == undefined) {
		res.push("N");
		return;
	} else {
		
		// value exists, so push it to the end of the array
		res.push(nodeParam.val);

		// now do a recursive function call back to the top on the L side until it reaches undefined
		// then go to the right side until it is undefined
		binaryTreeSerialize(nodeParam.left);
		binaryTreeSerialize(nodeParam.right);
	}
	
	// break out of this function altogether with your array manipulated outside of this function	
	return stringify(res);
}

function binaryTreeDeserialize(stringParam){
	
	// split the string and set an offset param
	let arrayFromString = stringParam.split(',');	
	let i = 0;	
	
	/** error block start **/
	let rebuilt = new Node();
	
	// turn the string into a value
	function deserial(){
		
		// if the value is undefined return out, still increment to prevent forever recurrsion
		if(arrayFromString[i] == 'N'){
			i++;			
			return undefined;
			
		} else {
			
			// otherwise it's time to add values
			// set the val of node object to the passed array value and increment
			rebuilt.val = new Node(arrayFromString[i], null, null);
			i++;
			console.log(rebuilt);
			
			// assign the left and right vals the node return, recur until undefined
			rebuilt.left = deserial();
			rebuilt.right = deserial();					
			return rebuilt;
			
		}		
		
	}
	
	/** error block end **/
	
	return deserial();
	
}

// object
let node = new Node('root', new Node('left', new Node('left')), new Node('right'));

// empty result array
let res = [];

// calling function for serialize and return a string
let resString = binaryTreeSerialize(node);

// works
// string the array and show res of serialize
console.log(resString);

// calling function for deserialize
let nodeObj = binaryTreeDeserialize(resString);

// works
// show deserial
console.log(nodeObj);

/***** End JavaScript Solution *****/
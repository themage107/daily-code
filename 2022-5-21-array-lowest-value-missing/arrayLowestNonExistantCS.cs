using System;
using System.Collections;
					
public class Program
{
	
	
	/*

	Rating: HARD

	Given an array of integers, 
	find the first missing positive integer in linear time and constant space. 
	In other words, find the lowest positive integer that does not exist in the array. 
	The array can contain duplicates and negative numbers as well.

	For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
	You can modify the input array in-place.

	***** C# Solution *****

	*/
	
	
	
	public int[] arrayVals = new int[] {3, 4, -1, 1, 2, 7, 5};
	
	public int arrayMissing(int[] arrayParam){
		
		// sort the values
		Array.Sort(arrayParam);
		
		for(int i = 0; i < arrayParam.Length; i++){
			if(arrayParam[i] < 0){
				continue;
			} else {
				if (arrayParam[i] + 1 < arrayParam[i+1]){
					return arrayParam[i] + 1;
				}
			}
		}
		
		return 0;
		
	}
	
	
	public void Main()
	{
		
		int missing = arrayMissing(arrayVals);		
		Console.Write(missing);
		
	}
	
}

/* End C# Solution */
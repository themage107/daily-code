using System;
					
public class Program
{
	
	/** Daily Challenge 5-18-2022 **/

	// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
	// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
	// Bonus: Can you do this in one pass?

	/** C# Solution **/
	
	
	public int[] numbersArray = new int[] {10, 15, 3, 7};
	public int k = 17;
	public bool res;
		
	public bool checker(int[] values, int checkVal)
	{

		// array length
		for (int i = 0; i < values.Length; i++)
		{
			
			// interior length (didn't say can't be the same number)
			for (int j = 0; j < values.Length; j++)
			{
	
				if ((values[j] + values[i]) % checkVal == 0)
				{
					return true;
				}

			}						
			
		}
		
		return false;
		
	}
	
	public void Main()
	{
		// challenge final call
		res = checker(numbersArray, k);		
	}
	
}

/** End C# Solution **/
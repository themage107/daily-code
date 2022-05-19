using System;
using System.Collections.Generic;
					
public class Program
{
	
	public int[] arrayVals = new int[] {1, 2, 3, 4, 5, 6};
	public List<int> arrayUpdatedVals = new List<int>(){};
	public List<int> arrayUpdatedValsNoDivision = new List<int>(){};
	
	// division
	public List<int> productArraySansPos(List<int> returnList, int[] aParam){

		// so we have the value set at 1, could also set the first loop to have an if i == 0, it's just i value
		int totalVal = aParam[0];

		// start at one since it's included already
		for (int i = 1; i < aParam.Length; i++){		
			totalVal *= aParam[i];		
		}

		for (int k = 0; k < aParam.Length; k++){		
			returnList.Add((totalVal / aParam[k]));
		}

		return returnList;
	} 
	
	// no divion
	public List<int> productArraySansPosNoDivision(List<int> noDivision, int[] aParam){
	
		for (int i = 0; i < aParam.Length; i++){		

			// staging var
			int holderVal = 0;
			bool ran = false;

			// internally loop it
			for (int k = 0; k < aParam.Length; k++){		

				// same position so ignore it
				if(k == i){				
					continue;
				} else {

					// set to 1 for initial go since we're multiplying accross values
					if(ran == false){
						holderVal = aParam[k];
						ran = true;
					} else {
						holderVal *= aParam[k];
					}

				}						

			}			

			// update the holder to the index
			noDivision.Add(holderVal);

			// clear it out
			holderVal = default(int);
		}

		return noDivision;

	}
	
	
	
	public void Main()
	{
		// division
		arrayUpdatedVals = productArraySansPos(arrayUpdatedVals, arrayVals);
		for(int i = 0; i < arrayUpdatedVals.Count; i++){
			Console.WriteLine(arrayUpdatedVals[i]);
		}				
		
		// no division
		arrayUpdatedValsNoDivision = productArraySansPosNoDivision(arrayUpdatedValsNoDivision, arrayVals);
		for(int i = 0; i < arrayUpdatedValsNoDivision.Count; i++){
			Console.WriteLine(arrayUpdatedValsNoDivision[i]);
		}
	}
	
}
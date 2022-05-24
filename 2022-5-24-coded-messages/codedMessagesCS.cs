using System;
using System.Collections.Generic;

public class Program
{
	
	string message = "123"; // should have 7 decodes: (1(a), 2(b), 3(c)), (12(al), 3(c)), (1(a), 23(w))
	int numberMessages = 0;
		
	public void Main()
	{			
		Console.Write(decodeMessage(message, numberMessages));
	}
	
	
	int decodeMessage(string messageParam, int numberMessagesParam) {
	
		// stage a list 
		List<string> messageParamList = new List<string>(){};

		// add to array based on string length
		for (int i = 0; i < messageParam.Length; i++){	
			messageParamList.Add(messageParam.Substring(i,1).ToString());
		}

		// 10 and 20 are valid entries but create an imaginary letter since a = 1
		// leading zero is invalid
		if(messageParamList.Contains("0")) {
		
			numberMessagesParam = 2;

		} else {

			// individual letter messages
			numberMessagesParam += messageParamList.Count;

			// loop through to count, cut off 1 minus so we don't hit nonindex
			for(int i = 0; i < messageParamList.Count - 1; i ++){		
				if(Convert.ToInt32(messageParamList[i] + messageParamList[i + 1]) < 27){
					numberMessagesParam += 2;
				}
			}

		}

		return numberMessagesParam;

}
	
	
}
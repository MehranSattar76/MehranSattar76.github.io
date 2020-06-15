function readability()
{
	let s = document.querySelector("#inputText").value;
	let n = s.length;                                                  // getting the length of string

    let countl = 0;
    let countw = 1;                                                     // counting of words will start with 1 becasue we differentiate
                                                                        //the word by checking spaces and last word will not have space after it
    let counts = 0;

    for( let i = 0 ; i < n ; i++)
    {
        if((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122 )|| (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)) // checking whether the chracter is a letter or not
        {
            countl++;                                              // counting the number of letters
        }

        else if (s.charCodeAt(i) == 32 )                                           // checking whether the character is space or not
        {
            countw++;                                              // counting the number of spaces or words
        }
        else if (s.charCodeAt(i) == 46 || s.charCodeAt(i) == 33 || s.charCodeAt(i) == 63)                // checking whether the character is "."or "!" or "?"
                                                                        // It will help us to count the number of sentences
        {
            counts++;                                              // counting the number of sentences
        }

    }

    let L = (countl /countw) * 100 ;
    let S = (counts / countw) * 100 ;
    let index = Math.round(0.0588 * L - 0.296 * S - 15.8);
	if(index >= 1 && index <= 16)                                           // Checking the index if it lies between 1 and 16
    {
    	document.querySelector("#result").innerHTML = "Index of Text is " + index;                                     // Displaying the index if it lies between 1 and 16
    }
    else if (index > 16)                                                // Checking the index if it is more than 16
    {
    	document.querySelector("#result").innerHTML = "Index of Text is 16+ ";                                           // Displaying the "Grade 16+"" if index is more than 16
    }
    else                                                                 // Checking the index if it is less than 1
    {
        document.querySelector("#result").innerHTML = "Index of Text is less than 1";                                   // Displaying the "Before Grade 1" if index is less than 1
    }
                                 // Displaying the index if it lies between 1 and 16



}
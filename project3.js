function encrypt()
{
    let key = document.querySelector("#key").value;
    let arglen = key.length;

    if (arglen != 26)                                           // Checking length of argument
    {
        alert("Key must contain 26 characters.");            // Displaying Error Message if argument does not has 26 characters
                                                              // Returning 1 , to quit program
    }

    var m ;
    var n;
    var ans = [];
    for (let l = 0; l < arglen ; l++)                           // Using For loop to see if all char of arg are alphabetic or not
    {
        m = key.charCodeAt(l);

        if ((m < 97 || m > 122) && (m < 65 || m > 90)) // Checking if char of arg are alphabetic (both low &upper case)
        {
            alert("Key must contain alphabetic characters."); // If char of arg are alphabetic ( low or upper case), showing error message
                                                       // Returning 1 , to quit program
        }

        let count = 0;                                          // Declaring count variable, to count number of occurence of char in arg

        for (let p = 0; p < arglen; p++)                        // Using for loop to generate each char of arg
        {
            n = key.charCodeAt(p);
            if (m == n)                               // Comparing each char with whole arg
            {
                count++;                                        // counting number of occurence of each char in arg
            }
        }
        if (count >= 2)                                 //for error, ocurrence should be more than two,because each char occure at least once
        {
            alert("Key must not contain repeated characters.");  // if char occurs equal or more than 2, showing error message

        }

    }

    let Diff = [26];                    // Declaring an array"Diff" to store difference of provided arg char values from reference
    let a = 65;                                                 // Declaring int a, reference of lower case charc
    let b = 97;                                                 // Declaring int b, reference of lower case charc
    let c;
    for (let i = 0; i < 26; i++)                                // Using for loop to take difference of each arg value from its reference
    {
        c = key.charCodeAt(i);

        if (c >= 65 && c <= 90)                     // if char of arg is UPPER CASE ALPHABET
        {
            Diff[i] = c - a;                               // Storing difference of char from arg with its reference, in arry "Diff"

        }
        else if (c >= 97 && c <= 122)                  // if char of arg is lower case alphabet
        {
            Diff[i] = c - b;                               // Storing difference of char from arg with its reference, in arry "Diff"

        }
        a++;                                                    // incrementing a, so reference of UPPER CASE char can change
        b++;                                                    // incrementing b, so reference of lower case char can change
    }

    let plain = document.querySelector("#inputText").value;                    // Prompting user to input plain text
    let plainlen = plain.length;                               // storing length of the input plain text
    let d;
    let x;
    let y;
    let z;

    for (let j = 0; j < plainlen; j++)                          // Using for loop, to access each char of the input plain text
    {
        d = plain.charCodeAt(j);

        if (d >= 65 && d <= 90)                 // Using condition to check if char is equal or between A & Z
        {
            x = d - 65;                               // storing difference of value of char from value of 'A'into int x
            d += Diff[x];                                // Adding value located at x location in Diff array, into value of char of plain text

            if (d > 90)                                 // if result is more than value of Z
            {
                d -= 26;                                 // Subtracting 26 from result, to wrap the text
                ans[j] = String.fromCharCode(d);                        // printing encrypted char
            }
            else
            {
                 ans[j] = String.fromCharCode(d);                          // if result is less than value of Z, then printing the result value as it is
            }
        }

        else if (d >= 97 && d <= 122)            // Using condition to check if char is equal or between a & z
        {
            y = d - 97;                              // storing difference of value of char from value of 'a'into int y
            z = d;                                   // storing value of char of plain text into another integer "z"
            z = z +  Diff[y];                                   // Adding value located at y location in Diff array, into value of z

            if (z > 122)                                        // if result has more value than "z"
            {
                z -= 26;                                        // Subtracting 26 from result, to wrap the text

                ans[j] = String.fromCharCode(z);                                // printing encrypted char
            }
            else                                                 // if result has less value than "z"
            {
                 ans[j] = String.fromCharCode(z);                               // if result is less than value of z, then printing the result value as it is
            }
        }
        else
        {
             ans[j] = String.fromCharCode(d);                            // if char of plain text is non-alphabetic, then print it as it is
        }
    }

    document.querySelector("#resultLabel").innerHTML = "Encrypted Text is: ";

    document.querySelector("#result").innerHTML = ans.join("");
}

function cipher()
{
   let key = document.querySelector("#key").value;
   let k = parseInt(key) ;                           // Converting string "arg" to integer "key", using "atoi" function
    k = k % 26;                               // reducing the input key to modulud of 26, to use it later in ciphering

    let s = document.querySelector("#inputText").value;            // Prompting user for input text and storing in string "s"
    let n = s.length;                                            // Getting length of "s" & storing as integer named as "n"
    var y = [];
    var m ;
    var a;


    for (let j = 0 ; j < n ; j++)                   // Using for loop to check all chars of the input text
    {
        m = s.charCodeAt(j);

        if (m >= 65 && m <= 90)             // if char is UPPER case ALPHABET
        {
            m = m + k;                              // Add value of "key" into that letter

            if (m > 90)                         // if result has more value than "Z"
            {
                m =m- 26;                         // Subtracting 26, to wrap the text
                y[j] = String.fromCharCode(m);
            } else                                    // if result has less value than "Z"
            {
               y[j] = String.fromCharCode(m);
            }
        } else if (m >= 97 && m <= 122)        // if char is lower case alphabet
        {
            a = m;                           // storing value of that letter into another integer "a"
            a = a + k;                              // Add value of "key" into that letter
            if (a > 122)                             // if result has more value than "z"
            {
               a = a - 26;                             // Subtracting 26, to wrap the text
               y[j] = String.fromCharCode(a);
            } else                                    // if result has less value than "z"
            {
                y[j] = String.fromCharCode(a);
            }
        } else                                        // if input char is non-alphabatic then
        {
            y[j] = String.fromCharCode(m);
        }



    }
    document.querySelector("#resultLabel").innerHTML = "Ciphered Text is: ";

    document.querySelector("#result").innerHTML =   y.join("");

}
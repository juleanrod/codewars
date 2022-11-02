/*
Description:
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to
lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/

function stringTransformer(str) {
    let arr = str.split(' ').reverse().join(' ').split('');
    let result = [];
    for(let value of arr) {
        if(value.charCodeAt(0) <= 90 && value.charCodeAt(0) >= 65) {
            result.push(value.toLowerCase());
        } else if(value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122){
            result.push(value.toUpperCase());
        } else {
            result.push(value);
        }
    }
    return result.join('');
}

// Time to complete: 12min

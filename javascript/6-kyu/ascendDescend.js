/*
 * Description: 
You are given three integer inputs: length, minimum, and maximum.
Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Decends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:
     length: 5, minimum: 1, maximum: 3   ==>  "12321"
     length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
     length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
Notes:

Length will always be non-negative
Negative numbers can appear for minimum and maximum values
Hyphens/dashes ("-") for negative numbers do count towards the length
The resulting string must be truncated to the exact length provided
Return an empty string if maximum < minimum or length == 0
Minimum and maximum can equal one another and result in a single number repeated
for the length of the string
*/


function ascendDescend(len, min, max) {
    if(len === 0) return '';
    if(min > max) return '';
    if(min === max) return `${min}`.repeat(len);

    let flag = true;
    let result = Array(len);
    result[0] = min;

    for (let i = 0 ; i < len; i++) {
        let previous = result[i];
        if (flag === true) {
            if (previous === max) {
                result[i+1] = --previous;
                flag = false;
            }
            result[i+1] = ++previous;
        }

        if(flag === false) {
            if (previous === min) {
                result[i+1] = ++previous;
                flag = true;
            } else {
                result[i+1] = --previous
            }
        }
    }

    return result.join('').slice(0, len);
}

// Time to complete: 55min

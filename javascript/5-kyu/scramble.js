/*

DESCRIPTION:
Complete the function scramble(str1, str2) that returns true if a portion of
str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be
included.
Performance needs to be considered.

Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/


function scramble(str1, str2) {
    let obj = str1.split("").reduce((obj, curr) => {
        obj[curr] ? obj[curr]++ : obj[curr] = 1;
        return obj;
    }, {});
    return str2.split("").every((character) => --obj[character] >= 0);
}

// Time to complete: 27min

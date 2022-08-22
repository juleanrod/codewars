/* Description:
 * The goal of this exercise is to convert a string to a new string where each 
 * character in the new string is "(" if that character appears only once in the
 * original string, or ")" if that character appears more than once in the original string. 
 * Ignore capitalization when determining if a character is a duplicate.
 */


function duplicateEncode(word){
  // special characters are allowed in the string including spaces and symbols and empty input
  // return a string value should contain only open parenthesis(none repeated) and 
  // close parenthesis(repeated), repeated characters are case insensitive
  
  // Sample cases:
  // fn("repeat") => "()()(("
  // fn("") => ""
  // fn("eeee1") => "))))("
  // fn("KklLe") => "))))("
  // fn("  !!") => "))))"
  
  // Sudo
  // Iterate over input, change character to lowercase and store count of each individual 
  // character into an object.
  // This object will help us on our next iteration as a reference for repeated characters.
  // Next we want to iterate over input once again, change character to lowercase, 
  // and compare current character with values inside the object that contains character counts.
  // After comparing if the value of the current character is equal to 1 we are going to 
  // append to our result an open parenthesis. Else if it's higher than 1, a closing parenthesis
  // Once done iterating, return result.
  
  const obj = {};
  for(let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    if(obj[char]){
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  
  let result = "";
  for(let j = 0; j < word.length; j++) {
    let char = word[j].toLowerCase();
    if(obj[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  
  return result;
}

// Time to complete: 50min

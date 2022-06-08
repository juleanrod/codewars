/*
DESCRIPTION:
Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters
(based on the described rules) and return the body cured of those "cancer"
characters.
*/


function cutCancerCells(organism){

    let stringA = organism.split('');
    let isLowerCase = (char) => char == char.toLowerCase();
    for(let i = 0; i < stringA.length; i++) {
      if(stringA[i] == 'C') {
          stringA[i] = 0;
          if(stringA[i-1]){
              if(isLowerCase(organism.charAt(i-1)))
                stringA[i-1] = 0;
          }
          if(stringA[i+1]){
              if(isLowerCase(organism.charAt(i+1)))
                stringA[i+1] = 0;
          }
      }
      if(stringA[i] == 'c')
        stringA[i] = 0;
    }
    return stringA.filter(value => value != 0).join('');
}

// Time to complete: 31min

/*DESCRIPTION:
We have the first value of a certain sequence, we will name it initVal. We
define pattern list, patternL, n array that
has the differences between contiguous terms of the sequence.  E.g: patternL =
[k1, k2, k3, k4]

The terms of the sequence will be such values that:

term1 = initVal
term2 - term1 = k1
term3 - term2 = k2
term4 - term3 = k3
term5 - term4 = k4
term6 - term5 = k1
term7 - term6 = k2
term8 - term7 = k3
term9 - term8 = k4
....  - ..... = ...
....  - ..... = ...
So the values of the differences between contiguous terms are cyclical and are
repeated as the differences values of the pattern list stablishes.

Let's see an example with numbers:

initVal = 10
patternL = [2, 1, 3]
term1 = 10
term2 = 12
term3 = 13
term4 = 16
term5 = 18
term6 = 19
term7 = 22  # and so on...
We can easily obtain the next terms of the sequence following the values in the
pattern list. We see that the sixth term of the sequence, 19, has the sum of its
digits 10.

Make a function sumDig_nthTerm(), that receives three arguments in this order

sumDig_nthTerm(initVal, patternL, nthTerm(ordinal number of the term in the sequence))

This function will output the sum of the digits of the n-th term of the sequence.

*/


function sumDigNthTerm(term1, patternl, nthterm) {
  let terms = [term1];
  for(let i = 0; i < nthterm; i++){
    if(nthterm == i + 1) {
      return String(terms[i]).split('').map(x => Number(x)).reduce((prev, curr)
          => prev + curr, 0); 
    }
    terms.push(terms[i] + patternl[i % patternl.length]); 
  }
  return 0;
}

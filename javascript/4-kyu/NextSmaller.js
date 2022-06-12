/*
Description:

    Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

    For example:

    nextSmaller(21) == 12
    nextSmaller(531) == 513
    nextSmaller(2071) == 2017

    Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no
    smaller number that contains the same digits. Also return -1 when the next
    smaller number with the same digits would require the leading digit to be zero.

    nextSmaller(9) == -1
    nextSmaller(111) == -1
    nextSmaller(135) == -1
    nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
    some tests will include very large numbers.
    test data only employs positive integers.
*/

function nextSmaller(n) {

  let min = minify(n);
  while(--n >= min) 
    if(minify(n) === min) return n;
  return -1;
}

const minify = n => [...String(n)].sort().join('').replace(/(^0+)([1-9])/gm, '$2$1');

// Time to complete: 23min

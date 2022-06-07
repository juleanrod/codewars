
var uniqueInOrder = function(iterable){

  let result = [...iterable];
  for(let i = 1; i < result.length; i++) {
    if(result[i] != result[i-1])
      continue
    result.splice(i, 1);
    i--;
  }
  return result;
}

// Time to complete: 20min

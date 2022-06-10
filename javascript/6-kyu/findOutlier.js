
function findOutlier(x){
  if(x[0] % 2 && x[1] % 2 || x[0] % 2 && x[2] % 2 || x[1] % 2 && x[2] % 2)
    return x.find(num => !(num % 2));
  return x.find(num => num % 2);
}

// Time to complete: 20min


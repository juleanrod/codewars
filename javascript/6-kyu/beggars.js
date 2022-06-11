function beggars(values, n){
  const arr = new Array(n).fill(0);
  let count = 0;
  
  for(let i = 0; i < values.length; i++) {
    if(count < n && count < values.length) {
      arr[count] += values[i];++count;
    }
    if(count >= n) count = 0;
  }
  
  return arr;
}

// Time to complete: 20min

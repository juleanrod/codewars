function nextSmaller(n) {
  let min = minify(n);
  while(--n >= min) if(minify(n) === min) return n;
  return -1;
}

const minify = n => [...String(n)].sort().join('').replace(/(^0+)([1-9])/gm, '$2$1');

// Time to complete: 23min

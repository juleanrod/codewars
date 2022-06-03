function sumDigNthTerm(term1, patternl, nthterm) {
  let terms = [term1];
  for(let i = 0; i < nthterm; i++){
    if(nthterm == i + 1) {
      return String(terms[i]).split('').map(x => Number(x)).reduce((prev, curr) => prev + curr, 0); 
    }
    terms.push(terms[i] + patternl[i % patternl.length]); 
  }
  return 0;
}

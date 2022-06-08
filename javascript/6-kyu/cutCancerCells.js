
function cutCancerCells(organism){
    let stringA = organism.split('');
    var isLowerCase = (char) => char == char.toLowerCase();
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

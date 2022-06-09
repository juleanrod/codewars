


function meeting(s) {

  return s.toUpperCase()
        .split(';')
        .map(name => name.replace(/(\w+):(\w+)/, '($2, $1)')).sort().join('');
}

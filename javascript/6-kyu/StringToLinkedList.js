function parse(string) {
  const arr = string.split(" -> ").map(x => Number(x));
  if(arr.length == 1 && arr[0] == NaN) return null;
  return recursive(arr.length, arr);
}

function recursive(len, arr){
  if(len == 1) return null;
  return new Node(arr[0], recursive(len - 1, arr.slice(1)));
}

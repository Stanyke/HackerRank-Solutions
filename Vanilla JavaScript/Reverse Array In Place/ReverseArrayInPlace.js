function reverseArrayInPlace(arr) {
  for (var a = 0; a <= Math.floor((arr.length - 1) / 2); a++) {
      let element = arr[a];
      arr[a] = arr[arr.length - 1 - a];
      arr[arr.length - 1 - a] = element;
  }
  return arr;
}

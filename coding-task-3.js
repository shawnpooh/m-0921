function isSorted(arr) {
  for (let i = 2; i < arr.length; i++) {
    if (
      (arr[i - 2] < arr[i - 1] && arr[i - 1] > arr[i]) ||
      (arr[i - 2] > arr[i - 1] && arr[i - 1] < arr[i])
    ) {
      return false;
    }
  }

  return true;
}

console.log(isSorted([]));
console.log(isSorted([42]));
console.log(isSorted([39, 42]));
console.log(isSorted([42, 39]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.log(isSorted([1, 5, 2]));

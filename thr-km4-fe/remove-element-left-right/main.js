function removeLeftRight(arr, left, right) {
  let result = [];

  if(left === "left") {
    result = arr;
    result.shift();
  }

  if (left === "right") {
    result = arr;
    result.pop();
  }

  return result;
}

console.log(removeLeftRight([1, 2, 3, 4, 5], 'left'))
console.log(removeLeftRight([1, 2, 3, 4, 5], "right"))
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'left'))
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], 'right'))
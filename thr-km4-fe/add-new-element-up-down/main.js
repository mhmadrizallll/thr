function addNewElementUpDown(array, element, position) {
  let result = [];

  if(position === "up") {
    result = array;
    result.unshift(element);
  }

  if (position === "down") {
    result = array;
    result.push(element);
  }

  return result;
}

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'up'));
console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, 'down'));
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'up'));
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", 'down'));
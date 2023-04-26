function removeUnrelated(object, key){
    let result = object;
    delete result[key];

    return result
}

console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'address'))
console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'hobbies'))
console.log(removeUnrelated({ name: 'Edo', age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }, 'name'))
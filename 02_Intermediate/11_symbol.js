const age = Symbol('age');

const obj = {
    name: "Deepak",
    [age]: 24,
    age: 34
}
obj[age] = 21;


// console.log(obj[age]);
// console.log('');

// When you create a symbol it is created inside the symbol registry
// If you want to create same symbols for a field then
const id1 = Symbol('ID');
const id2 = Symbol('ID')

[id1]=5
[id2]=5
console.log([id1]==[id2]);

// const id3 = Symbol.for('ID');
// const id4 = Symbol.for('ID');

console.log(id1===id2);

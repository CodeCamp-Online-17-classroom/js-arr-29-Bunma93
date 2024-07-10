// write code here
const array1 = [1, 2, 30, 400];
let result1 = array1.map(x => x*2);

console.log(result1);

const array2 = [1, 2, 3, 4];
let result2 = array2.map(x => String(x));

console.log(result2);

const array3 = [1, '1', 2, {}];
let result3 = array3.map(x => typeof(x));

console.log(result3);
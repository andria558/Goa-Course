const arr = [1, 2, 3, 4, 5];

const [f, s, ...rest] = arr;

const otherarr = rest

console.log(otherarr);
console.log([f,s]);



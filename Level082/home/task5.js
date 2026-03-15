let a = "hello";
let b = a;
b = "world";

console.log(a); // ? hello
console.log(b); // ? world

let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name); // ? Master
console.log(y.name); // ? Master

// ! Becuse when copying non object creating another variable with same wakue but when doing it at object is different becuse they are connected with blotueth
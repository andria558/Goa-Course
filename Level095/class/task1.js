console.log("ლომიიიიი");

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log("მონაცემები წამოვიღეთ:");
    console.log(data);
  })

function vfexvi() {
  return "ვეფხვი მოდის!";
}

function lomi() {
  return "ლომი ბრუნდება!";
}

console.log(vfexvi());
console.log(lomi());

console.log("ეს ბოლოა, მაგრამ fetch ჯერ არ დასრულებულა");

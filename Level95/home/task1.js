console.log("ლომიიიიი");

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log("მონაცემები წამოვიღეთ:");
    console.log(data);
  })

console.log("დავამთავრე დათოვ")

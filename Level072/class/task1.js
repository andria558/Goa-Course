

function love() {
  let person0 = prompt("პირველი სახელი: ");
  let person1 = prompt("მეორე სახელი: ");
  let lovenum = Math.floor(Math.random() * 101);

  alert(`${person0}-ს და ${person1}-ს სიყვარულის პროცენტია: ${lovenum}`)
}

love();
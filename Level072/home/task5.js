function calculateLove() {
  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();


  if (name1 !== "" && name2 !== "") {
    let lovePercent = Math.floor(Math.random() * 101);
    document.getElementById("result").innerHTML = 
      `${name1} and ${name2} Love percent is ${lovePercent} ☺️❤️`;
  } else {
    document.getElementById("result").innerHTML = "Please enter both names!";
  }
}

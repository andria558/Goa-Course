let info = {
  name: `redmi 14c 😎`,
  battery: 99,
  isCharged: true
}

for (let x in info) {
  if (typeof info[x] == `number`){
    console.log(info[x]) 
  }
}

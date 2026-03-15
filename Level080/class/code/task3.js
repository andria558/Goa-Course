//! Convert number to reversed array of digits

//? Solution : 

function digitize(n) {
  let str = String(n)
  let result = []

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(Number(str[i]))
  }


  return result
}

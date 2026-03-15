//! Invert values

//? Solution : 

function invert(arr) {
  answer = []
  
   if (arr.length < 1) {
     return []
   }
  
  for (let i of arr) {
    i = -i
    answer.push(i)
  }
  
  return answer
}
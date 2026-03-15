//! Get the mean of an array

//? Solution : 

function getAverage(marks) {
  a = 0

  for (let i of marks) {
    a += i
  }

  a = a / marks.length

  return Math.floor(a)
}
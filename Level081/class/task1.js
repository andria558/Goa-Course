passed = 0
res = [70, 65, 5, 6, 54, 7, 8, 69, 53, 70, 69, 70]

for (let x of res) {
  if (x >= 70) {
    passed += 1
  }
}

console.log(passed)
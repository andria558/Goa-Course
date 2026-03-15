str1 = prompt("Enter str: ")
times1 = Number(prompt("Enter num: "))

function repeatString(str, times) {
    return str.repeat(times)
}

console.log(repeatString(str1 + " ", times1))
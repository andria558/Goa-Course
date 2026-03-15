function fizzBuzz(n) {
  let output = [];
  


    if (n % 3 === 0 && n % 5 === 0) {
      output.push("FizzBuzz");
    }

    else if (n % 3 === 0) {
      output.push("Fizz");
    }

    else if (n % 5 === 0) {
      output.push("Buzz");
    }

    else {
      output.push(n);
    }
  
  
  return output;
}

console.log(fizzBuzz(31));


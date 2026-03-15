function demoFunction() {
  // 1. Alert და console.log:
  alert("hello on demoFunction !");
  console.log("hi on demoFunction!");

  // 2. while loop - გამოთვალებს 1დან 5-მდე:
  let i = 1;
  console.log("while loop:");
  while (i <= 5) {
    console.log("in question i = " + i);
    i++;
  }

  // 3. for loop - გამოთვლის 5-დან 1-მდე:
  console.log("for loop:");
  for (let j = 5; j >= 1; j--) {
    console.log("in for j = " + j);
  }

  // 4. switch - გადახდის მაგალითი:
  let num = 2;
  let message = "";
  switch (num) {
    case 1:
      message = "num is 1";
      break;
    case 2:
      message = "num is 2";
      break;
    case 3:
      message = "num is 3";
      break;
    default:
      message = "num is not 1, 2 or 3";
      break;
  }
  alert("Switch next: " + message);
  console.log("Switch next: " + message);

  // 5. if else - გადახდის მაგალითი:
  let numberToCheck = 6;
  if (numberToCheck % 2 === 0) {
    alert("num " + numberToCheck + " is even.");
    console.log("if else: num " + numberToCheck + "is even.");
  } else {
    alert("num " + numberToCheck + " is odd..");
    console.log("if else: num " + numberToCheck + " is odd..");
  }

  // 6. ~~~~~~~~

    sum = (s1 + s2 + s3) / 3
  
    score = (90 <= sum <= 100) ? 'A' :

        (80 <= score < 90) ? 'B' :

        (70 <= score < 80) ? 'C' :

        (60 <= score < 70) ? 'D' : 'F';
        
}

demoFunction();

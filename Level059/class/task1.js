let math = number(prompt("Enter your math score: "));
let history = number(prompt("Enter your history score: "));
let sport = number(prompt("Enter your sport score: "));

let midScore = (math + history + sport) / 3

if (midScore > 90 && midScore < 100) {
    console.log(A);
} else if (midScore > 70 && midScore < 80){
    console.log(B);
} else if (midScore > 50 && midScore < 65){
    console.log(C);
} else if (midScore > 25 && midScore < 50){
    console.log(D);
} else {
    console.log("წადი ისწავლე და მერე მოდი");
}


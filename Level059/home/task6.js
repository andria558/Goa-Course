let score = parseInt(prompt("შეიყვანეთ ქულა (0-100):"));

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 60 && score <= 69) {
    console.log("D");
} else if (score >= 0 && score <= 59) {
    console.log("F");
} else {
    console.log("არასწორი ქულა! გთხოვთ შეიყვანოთ 0-100 - ამდე.");
}

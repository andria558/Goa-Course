let temperature = Float(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში: "));

if (temperature < 14) {
    console.log("ცივი");
} else if (temperature >= 14 && temperature < 25) {
    console.log("ზომიერი");
} else {
    console.log("ცხელი");
}

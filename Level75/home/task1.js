// innerHTML - შეგვიძლია გამოვსახოთ ტექსტი ასემვე შეგვიძლია ტექსტი ჩავსვათ html ტეგებში მაგ h1 - ში .
let element = document.getElementById('element').innerHTML = "<p>Hello</p>";

// აბრუნებს მუქ ტექსტს

//  innerText - გამოსახავს ტექსტს მაგრამ არ შეგვიძლია ჩავსვათ html ტეგებში.
let element1 = document.getElementById('element1').innerText = "Hello";

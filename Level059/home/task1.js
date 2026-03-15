
const age = Number(prompt("შეიყვანეთ თქვენი ასაკი: "));
const gender = prompt("შეიყვანეთ თქვენი სქესი (კაცი/ქალი): " , "კაცი/ქალი");
const income = Number(prompt("შეიყვანეთ თქვენი შემოსავალი: "));
let message = "";


if (age < 18) {
    message = "მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია";
} else if (gender === "ქალი") {
    if (income > 5000) {
        message = "თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია";
    } else if (income > 3000) {
        message = "ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.";
    } else {
        message = "გჭირდებათ ფინანსური გეგმის გაუმჯობესება";
    }
} else if (gender === "კაცი") {
    if (income > 6000) {
        message = "თქვენ მზად ხართ ინვესტიციებისთვის!";
    } else if (income > 4000) {
        message = "შემოსავალი სტაბილურია";
    } else {
        message = "გჭირდებათ ფინანსური გეგმის გაუმჯობესება";
    }
}

alert(message);
console.log(message)

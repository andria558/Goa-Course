const form = document.getElementById('nameForm');
const input = document.getElementById('nameInput');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // გვერდის განახლება აირიდე
  console.log("შეყვანილი სახელი:", input.value); // გამოიტანე მნიშვნელობა
});

function checkAnswer() {
  const options = document.getElementsByName('planet');
  let selected = null;

  for (const option of options) {
    if (option.checked) {
      selected = option.value;
      break;
    }
  }

  const result = document.getElementById('result');

  if (!selected) {
    result.textContent = "გთხოვთ, აირჩიოთ პასუხი.";
    result.style.color = "orange";
  } else if (selected === "Jupiter") {
    result.textContent = "სწორია! იუპიტერი ყველაზე დიდი პლანეტაა.";
    result.style.color = "green";
  } else {
    result.textContent = "არასწორია. სწორი პასუხია იუპიტერი.";
    result.style.color = "red";
  }
}

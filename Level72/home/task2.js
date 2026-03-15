
var names = ["neltazi", "saba", "Amiko", "mariami"];

function pickRandomName(list) {
  var randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
var payer = pickRandomName(names);
console.log(payer + " paying");
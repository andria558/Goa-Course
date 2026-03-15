const basic = {
  pushUps: 20,
  squats: 30
};

const advanced = {
  pullUps: 10,
  burpees: 15
};

const total = {...basic, ...advanced}

console.log(total);

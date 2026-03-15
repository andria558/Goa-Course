let car = {
  brand: 'BMW',
  model: 'M 5',
  color: 'chorni'
};


for (x in car) {
  console.log(`property is : ${x} - Value is : ${car[x]}`);
};

console.log(`car brand is ${car.brand} & Model is ${car.model} ${car.color}`);
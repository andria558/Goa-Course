function filterOut(target, ...values) {
  return values.filter(value => value != target);
}


console.log(filterOut(1,   2, 3, 1, 5, 6));

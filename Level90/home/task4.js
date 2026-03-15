function logExceptLast(...items) {
  return items.slice(0, -1);
}


console.log(logExceptLast(1, 2, 3, 4, 5, 6));


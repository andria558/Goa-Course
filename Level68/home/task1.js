let university = {
  name: "თბილისის უნივერსიტეტი",
  departments: 5,
  website: "https://www.tbilisiuni.edu.ge",
  ratings: {
    student1: 4.5,
    student2: 4.7,
    student3: 4.2
  }
};

console.log(university);

if (university.scholarship === undefined) {
  console.log(false);
} else {
  console.log(true);
}

Object.assign(university, { studentsCount: 1700 });
console.log(university);

Object.freeze(university);
university.name = "New universitety";
console.log(university);

console.log(Object.isFrozen(university));

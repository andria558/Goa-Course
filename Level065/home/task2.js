
let student = {
  name: "გიორგი",
  age: 21,
  faculty: "კომპიუტერული მეცნიერება",
  course: 3,
  average: 8.7
};

console.log(student);

console.log(student.name);
console.log(student["name"]);

console.log(student.age);
console.log(student["age"]);

console.log(student.faculty);
console.log(student["faculty"]);

console.log(student.course);
console.log(student["course"]);

console.log(student.average);
console.log(student["average"]);


console.log("სტუდენტის სახელი " + student.name +" არის, ასაკი " + student.age +"-შია, ფაკულტეტი " + student.faculty +" და კურსი " + student.course +", სისტემური საშუალო ქულის მიხედვით არის " + student.average + ".");

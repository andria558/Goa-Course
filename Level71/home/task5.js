let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 90, 78];

function addStudent(studentName, grade) {
  students.unshift(studentName);
  grades.unshift(grade);
  return { students: students, grades: grades };
}


function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students: students, grades: grades };
}


function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}
console.log("After adding a student:", addStudent("David", 92));

console.log("After removing the last student:", removeLastStudent());

console.log("After replacing grade at index 1:", replaceGrade(1, 95));

console.log("After updating all grades:", updateGrades(80));

const courses = [
  {
    id: "CS101",
    name: "Intro to Computer Science",
    isActive: true,
    capacity: 50,
    credits: 3,
    students: [
      { name: "Alice", grades: [85, 90, 78] },
      { name: "Bob", grades: [70, 75, 80] }
    ]
  },
  {
    id: "MA201",
    name: "Calculus I",
    isActive: false,
    capacity: 25,
    credits: 4,
    students: [
      { name: "Charlie", grades: [60, 65, 68] },
      { name: "Dave", grades: [72, 74, 76] }
    ]
  },
  {
    id: "PH301",
    name: "Physics",
    isActive: true,
    capacity: 40,
    credits: 3,
    students: [
      { name: "Eve", grades: [88, 92, 95] },
      { name: "Frank", grades: [78, 85, 80] }
    ]
  }
];

const studentNamesString = "Alice,Bob,Charlie,Dave,Eve,Frank";


//? I
const isCoursesArray = Array.isArray(courses);
const isStudentNamesArray = Array.isArray(studentNamesString);

console.log("Is courses an array?", isCoursesArray);
console.log("Is studentNamesString an array?", isStudentNamesArray);

//? II
const allStudentNames = Array.from(studentNamesString.split(","));
console.log("All student names:", allStudentNames);

//? III
courses.forEach(course => {
  console.log(`Course ID: ${course.id}, Name: ${course.name}`);
});

//? IV
const courseNames = courses.map(course => course.name);
console.log("Course Names:", courseNames);

//? V
const courseAverages = courses.map(course => {
  const allGrades = course.students.flatMap(student => student.grades);
  const average = allGrades.reduce((sum, grade) => sum + grade, 0) / allGrades.length;
  return { id: course.id, averageGrade: average.toFixed(2) };
});

console.log("Course Averages:", courseAverages);

//? VI
const activeCourses = courses.filter(course => course.isActive);
console.log("Active Courses:", activeCourses);

//? VII
const calculusCourse = courses.find(course => course.id === "MA201");
console.log("Calculus Course:", calculusCourse);

//? VIII
courses.forEach(course => {
  const allPassed = course.students.every(student =>
    student.grades.some(grade => grade >= 70)
  );
  console.log(`All students in ${course.id} have at least one grade ≥ 70: ${allPassed}`);
});

//? IX
const hasLowCapacity = courses.some(course => course.capacity < 30);
console.log("Is there a course with capacity < 30?", hasLowCapacity);

//? X
const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
console.log("Courses sorted by capacity:", coursesByCapacity);

//? XI
coursesByCapacity.reverse();
console.log("Reversed courses by capacity:", coursesByCapacity);

//? XII
const totalCredits = activeCourses.reduce((sum, course) => sum + course.credits, 0);
console.log("Total credits from active courses:", totalCredits);

//? XIII
const reversedCourseNames = activeCourses.reduceRight((acc, course, index) => {
  return index === activeCourses.length - 1 ? course.name : acc + " - " + course.name;
}, "");

console.log("Reversed active course names:", reversedCourseNames);

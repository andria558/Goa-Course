const studentData = [
  {
    id: 1,
    name: "Alice",
    grades: {
      Math: [90, 85],
      Science: [88],
      History: [92]
    },
    attendance: [true, true, false, true],
    extracurricular: ["Debate Team", "Chess Club"]
  },
  {
    id: 2,
    name: "Bob",
    grades: {
      Math: [60, 65],
      Science: [58],
      History: [70]
    },
    attendance: [false, true, false, false],
    extracurricular: []
  },
  {
    id: 3,
    name: "Charlie",
    grades: {
      Math: [100, 95],
      Science: [98, 100],
      History: [90]
    },
    attendance: [true, true, true, true],
    extracurricular: ["Debate Team", "Basketball"]
  }
];

// Task 1
studentData.forEach(function(student) {
  console.log("Hello, " + student.name + "!");
});

// Task 2
const studentNames = studentData.map(function(student) {
  return student.name;
});

// Task 3
const studentAverages = studentData.map(function(student) {
  let allScores = [];
  for (let subject in student.grades) {
    allScores = allScores.concat(student.grades[subject]);
  }
  let total = allScores.reduce(function(sum, score) {
    return sum + score;
  }, 0);
  let average = total / allScores.length;
  return { name: student.name, average: average };
});

// Task 4
const highPerformingStudents = studentAverages.filter(function(student) {
  return student.average >= 85;
});

// Task 5
const strugglingStudents = studentData.filter(function(student) {
  let subjects = Object.values(student.grades);
  return subjects.some(function(scores) {
    return scores.every(function(score) {
      return score < 70;
    });
  });
});

// Task 6
const totalExtracurriculars = studentData.reduce(function(total, student) {
  return total + student.extracurricular.length;
}, 0);

// Task 7
let subjectTotals = {};
studentData.forEach(function(student) {
  for (let subject in student.grades) {
    if (!subjectTotals[subject]) {
      subjectTotals[subject] = { total: 0, count: 0 };
    }
    student.grades[subject].forEach(function(score) {
      subjectTotals[subject].total += score;
      subjectTotals[subject].count += 1;
    });
  }
});

let highestAvg = -Infinity;
let highestSubject = "";
for (let subject in subjectTotals) {
  let avg = subjectTotals[subject].total / subjectTotals[subject].count;
  if (avg > highestAvg) {
    highestAvg = avg;
    highestSubject = subject;
  }
}

// Task 8
const debateTeamReverse = studentData.reduceRight(function(names, student) {
  if (student.extracurricular.includes("Debate Team")) {
    names.push(student.name);
  }
  return names;
}, []).join(" and ");

// Task 9
const allHaveGoodAttendance = studentData.every(function(student) {
  let presentDays = student.attendance.filter(function(day) {
    return day;
  }).length;
  return presentDays >= student.attendance.length / 2;
});

// Task 10
const hasInactiveStudent = studentData.some(function(student) {
  return student.extracurricular.length === 0;
});

// Task 11
studentData.forEach(function(student) {
  for (let subject in student.grades) {
    student.grades[subject].forEach(function(score) {
      if (score === 100) {
        console.log("Congratulations, " + student.name + ", for achieving a perfect score in " + subject + "!");
      }
    });
  }
});

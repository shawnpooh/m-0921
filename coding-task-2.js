const students = [
  { studentName: 'John', score1: 47, score2: 46 },
  { studentName: 'Bob', score1: 23, score2: 24 },
  { studentName: 'Nick', score1: 40, score2: 35 },
  { studentName: 'Alex', score1: 44, score2: 45 },
];

const degrees = ['A', 'B', 'C', 'D', 'E'],
  passingLimits = [91, 81, 71, 61, 51];

function calculateScores(score1, score2) {
  return score1 + score2;
}

function getFinalResults() {
  for (let i = 0; i < students.length; i++) {
    const totalScore = calculateScores(students[i].score1, students[i].score2);
    if (totalScore >= passingLimits[i]) {
      console.log(
        `${students[i].studentName} passed the exam and achieved ${degrees[i]}.`
      );
    } else {
      console.log(`${students[i].studentName} failed the exam.`);
    }
  }
}

getFinalResults();
